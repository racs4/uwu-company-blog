import fs from "fs";
import matter from "gray-matter";
import { MDXRemote } from "next-mdx-remote";
import { serialize } from "next-mdx-remote/serialize";
import Head from "next/head";
import path from "path";
import Link from "next/link";
import { postFilePaths, POSTS_PATH } from "../utils/data";

// language highlighting
import { refractor } from "refractor";
import agda from "refractor/lang/agda.js";
import haskell from "refractor/lang/haskell.js";
import kind2 from "../utils/kind-prism";
import hvm from "../utils/hvm-prism";
import idris from "refractor/lang/idris.js";
import rehypePrismGenerator from "rehype-prism-plus/generator";

refractor.register(kind2);
refractor.register(haskell);
refractor.register(agda);
refractor.register(hvm);
refractor.register(idris);

const myPrismPlugin = rehypePrismGenerator(refractor);

/// Customize links
function CustomLink({ as, href, ...otherProps }) {
  return (
    <>
      <Link as={as} href={href}>
        <a {...otherProps} />
      </Link>
      <style jsx>{`
        a {
          color: tomato;
        }
      `}</style>
    </>
  );
}

/// Customized and optimized components
const optimizedSharedComponents = {
  a: CustomLink,
  // It also works with dynamically-imported components, which is especially
  // useful for conditionally loading components for certain routes.
  // See the notes in README.md for more details.
  Head,
};

export default function PostPage({ source, frontMatter }) {
  return (
    <>
      {/* Html head */}
      <Head>
        <meta name="description" content={frontMatter.description}></meta>
        <meta property="og:title" content={frontMatter.title} />
        <meta property="og:type" content="website" />
        {frontMatter.thumb && (
          <meta property="og:image:url" content={frontMatter.thumb} />
        )}
        <meta property="og:description" content={frontMatter.description} />
      </Head>
      {/* Blog */}
      <div className="post-wrapper">
        {/* Title */}
        <div className="post-header">
          <div className="title">{frontMatter.title}</div>
        </div>
        {/* Body */}
        <div className="mdx">
          <MDXRemote {...source} components={optimizedSharedComponents} lazy />
        </div>
      </div>
    </>
  );
}

export const getStaticProps = async ({ params }) => {
  const postFilePath = path.join(POSTS_PATH, `${params.post}.mdx`);
  const source = fs.readFileSync(postFilePath);

  const { content, data } = matter(source);

  const mdxSource = await serialize(content, {
    scope: data,
    mdxOptions: {
      rehypePlugins: [myPrismPlugin],
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
    .map((post) => ({ params: { post } }));

  return {
    paths,
    fallback: false,
  };
};
