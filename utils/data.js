import fs from "fs";
import matter from "gray-matter";
import path from "path";

// POSTS_PATH is useful when you want to get the path to a specific file
export const POSTS_PATH = path.join(process.cwd(), "posts");

// postFilePaths is the list of all mdx files inside the POSTS_PATH directory
export const postFilePaths = fs
  .readdirSync(POSTS_PATH)
  .filter((path) => /\.mdx?$/.test(path));

export function getPosts(params) {
  let posts = postFilePaths
    .map((filePath) => {
      const source = fs.readFileSync(path.join(POSTS_PATH, filePath));
      const { content, data } = matter(source);
      return { content, data, filePath };
    })
    .filter((post) => {
      return post.data.published;
    })
    .sort((postA, postB) => {
      let a_date = new Date(postA.data.publishedOn);
      let b_date = new Date(postB.data.publishedOn);
      return b_date - a_date;
    });

  return posts;
}
