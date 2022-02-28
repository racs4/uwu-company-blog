import { getPosts } from "../utils/data";
import Blog from "../layouts/blog/Blog.js";

export default function Index({ posts, params }) {
  return (
    <Blog
      posts={posts}
    />
  );
}

export function getServerSideProps() {
  const posts = getPosts();
  return { props: { posts } };
}

// export function getStaticProps(params) {
//   const posts = getPosts();
//   return { props: { posts } };
// }
