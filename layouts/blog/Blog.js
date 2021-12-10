import Title from "../../components/Title";
import Summary from "../../components/Summary";
import Pagination from "../../components/Pagination";
import { useRouter } from "next/dist/client/router";
import styled from "styled-components";

const Wrapper = styled.div `
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: calc(100vh - 190px);
`;

export default function Blog({ posts, page, category, pageQtt }) {
  const router = useRouter();

  return (
    <Wrapper>
      <div>
        <Title>Posts</Title>
        {posts.map((post) => (
          <Summary
            key={post.filePath}
            link={post.filePath.replace(/\.mdx?$/, "")}
            title={post.data.title}
            category={post.data.category}
          >
            {post.data.description}
          </Summary>
        ))}
      </div>
      <Pagination
        total={pageQtt}
        page={page}
        whenPageChange={(page) => {
          if (category) {
            router.push(`/blog/?page=${page}&category=${category}`);
          } else {
            router.push(`/blog/?page=${page}`);
          }
        }}
      />
    </Wrapper>
  );
}
