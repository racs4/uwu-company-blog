import fs from "fs";
import matter from "gray-matter";
import path from "path";
import Title from "../../components/Title";
import Summary from "../../components/Summary";
import { postFilePaths, POSTS_PATH } from "../../utils/mdxUtils";

export default function Index({ posts }) {
  return (
    <>
      <Title>Posts</Title>
      {posts.map((post) => (
        <Summary
          key={post.filePath}
          link={post.filePath.replace(/\.mdx?$/, "")}
          title={post.data.title}
        >
          {post.data.description}
        </Summary>
      ))}
    </>
  );
}

export function getStaticProps() {
  const posts = postFilePaths
    .map((filePath) => {
      const source = fs.readFileSync(path.join(POSTS_PATH, filePath));
      const { content, data } = matter(source);

      return {
        content,
        data,
        filePath,
      };
    })
    .filter((post) => post.data.published)
    .sort(
      (dataA, dataB) =>
        new Date(dataA.data.publishedOn) - new Date(dataB.data.publishedOn)
    );

  return { props: { posts } };
}
