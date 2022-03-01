import Summary from "../../components/Summary";
import { useRouter } from "next/dist/client/router";
import styled from "styled-components";

const Wrapper = styled.div `
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: calc(100vh - 190px);
  max-width: 798px;
  margin: 0 auto;
`;

export default function Blog({ posts, page, category, pageQtt }) {
  const router = useRouter();

  return (
    <Wrapper>
      <div>
        {posts.map((post) => (
          <Summary
            key={post.filePath}
            link={post.filePath.replace(/\.mdx?$/, "")}
            title={post.data.title}
            date={post.data.publishedOn}
          >
            {post.data.description}
          </Summary>
        ))}
      </div>
      {/* <Pagination
        total={pageQtt}
        page={page}
        whenPageChange={(page) => {
          if (category) {
            router.push(`/blog/?page=${page}&category=${category}`);
          } else {
            router.push(`/blog/?page=${page}`);
          }
        }}
      /> */}
    </Wrapper>
  );
}
