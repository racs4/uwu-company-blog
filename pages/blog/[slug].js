import fs from "fs";
import matter from "gray-matter";
import { MDXRemote } from "next-mdx-remote";
import { serialize } from "next-mdx-remote/serialize";
import dynamic from "next/dynamic";
import Head from "next/head";
import path from "path";
import styled from "styled-components";
import CustomLink from "../../components/CustomLink";
import Title from "../../components/Title";
import { postFilePaths, POSTS_PATH } from "../../utils/mdxUtils";
import rehypePrism from "@mapbox/rehype-prism";
import toc from "@jsdevtools/rehype-toc";
import slug from "rehype-slug";
import rehypeSlug from "rehype-slug";

// Custom components/renderers to pass to MDX.
// Since the MDX files aren't loaded by webpack, they have no knowledge of how
// to handle import statements. Instead, you must include components in scope
// here.
const components = {
  a: CustomLink,
  // It also works with dynamically-imported components, which is especially
  // useful for conditionally loading components for certain routes.
  // See the notes in README.md for more details.
  Button: dynamic(() => import("../../components/Button")),
  Head,
};

const MDX = styled.main`
  margin: 0 200px;
  text-align: justify;

  p {
    font-style: normal;
    font-weight: 500;
    font-size: 1rem;
    line-height: 29px;
  }

  h1 {
    color: ${({ theme }) => theme.color.primary};
  }

  blockquote {
    border-left: 8px solid #c3daf1;
    padding: 0 20px;
  }

  code {
    background-color: lightgrey;
    padding: 0 5px;
  }

  pre {
    background-color: #c3daf1;
    font-family: monospace;
    padding: 20px 40px;
    border-radius: 10px;
    overflow: auto;

    code {
      background: transparent;
    }
  }

  .toc {
    float: right;
  }

  .keyword {
    color: blue;
  }

  .function {
    color: red;
  }

  .class-name,
  .maybe-class-name {
    color: #5e6fed;
  }

  .comment {
    color: green;
  }
`;

export default function PostPage({ source, frontMatter }) {
  return (
    <>
      <Head>
        {" "}
        <meta name="description" content={frontMatter.description}></meta>{" "}
      </Head>
      <div className="post-header">
        <Title style={{ textAlign: "center" }}>{frontMatter.title}</Title>
        {/* {frontMatter.description && (
          <p className="description">{frontMatter.description}</p>
        )} */}
      </div>
      <MDX>
        <MDXRemote {...source} components={components} lazy />
      </MDX>
    </>
  );
}

export const getStaticProps = async ({ params }) => {
  const postFilePath = path.join(POSTS_PATH, `${params.slug}.mdx`);
  const source = fs.readFileSync(postFilePath);

  const { content, data } = matter(source);

  const mdxSource = await serialize(content, {
    scope: data,
    mdxOptions: {
      rehypePlugins: [rehypePrism],
    },
  });

  return {
    props: {
      source: mdxSource,
      frontMatter: data,
    },
  };
};

export const getStaticPaths = async () => {
  const paths = postFilePaths
    // Remove file extensions for page paths
    .map((path) => path.replace(/\.mdx?$/, ""))
    // Map the path into the static paths object required by Next.js
    .map((slug) => ({ params: { slug } }));

  return {
    paths,
    fallback: false,
  };
};
