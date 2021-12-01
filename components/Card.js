import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;

  width: 568px;
  height: 486px;

  border-radius: 5px;

  & > * {
    margin-bottom: 10px;
  }
`;

const Head = styled.div`
  font-weight: bold;
  line-height: 20px;
  /* identical to box height */

  color: ${({ theme }) => theme.color.primary};
  text-transform: uppercase;
`;

const Content = styled.div`
  font-weight: normal;

  line-height: 20px;
  flex-grow: 1;
  flex-shrink: 1;
  overflow: hidden;
  text-overflow: ellipsis;
  color: ${({ theme }) => theme.color.secondary};
`;

const Placeholder = styled.div`
  width: 100%;
  height: 80%;
  flex-shrink: 0;
  background-color: lightgray;
`;

export default function Card({ title, content, children }) {
  return (
    <Wrapper>
      <Placeholder />
      <Head>{title}</Head>
      <Content>{content}</Content>
    </Wrapper>
  );
}
