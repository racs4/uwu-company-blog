import { getPosts } from "../utils/data";
import Link from "next/link";

export default function Index({ posts, params }) {
  return (
    <div className="list-wrapper">
      <div>
        {posts.map((post) => {
          const link = post.filePath.replace(/\.mdx?$/, "");
          return (
            <div className="summary" key={post.filePath}>
              <span className="summary-date">{post.data.publishedOn}</span>
              <Link as={`/${link}`} href="/[slug]">
                <div className="summary-title">{post.data.title}</div>
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
}

// export function getServerSideProps() {
//   const posts = getPosts();
//   return { props: { posts } };
// }

export function getStaticProps(params) {
  const posts = getPosts();
  return { props: { posts } };
}
