import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;

  width: 568px;

  border-radius: 5px;

  & > * {
    margin-bottom: 10px;
  }

  & .card-ratio {
    width: 100%;
    padding-bottom: 60%;

    position: relative;

    > div {
      position: absolute;
      top: 0;
      left: 0;
      bottom: 0;
      right: 0;
    }
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
  height: 100%;
  flex-shrink: 0;
  background-color: lightgray;
`;

export default function Card({ title, content, children }) {
  return (
    <Wrapper>
      <div className="card-ratio">
        <div>
          <Placeholder />
        </div>
      </div>
      <Head>{title}</Head>
      <Content>{content}</Content>
    </Wrapper>
  );
}
