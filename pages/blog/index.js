import { getPosts } from "../../utils/data";
import Blog from "../../layouts/blog/Blog.js";

export default function Index({ posts, params }) {
  return (
    <Blog
      posts={posts}
      category={params.category}
      page={params.page}
      pageQtt={params.pageQtt}
    />
  );
}

export function getServerSideProps(context) {
  const { query } = context;

  let params = {
    page: query?.page || 1,
    category: query?.category || null,
  };

  const { posts, pageQtt } = getPosts(params);
  return { props: { posts, params: { ...params, pageQtt } } };
}

// export function getStaticProps(params) {
//   const posts = getPosts();
//   return { props: { posts } };
// }
