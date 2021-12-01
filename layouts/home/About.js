import styled from "styled-components";
import Title from "../../components/Title";

const Wrapper = styled.div`
  & .about-content {
    width: 100%;

    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }
`;

export default function About({}) {
  return (
    <Wrapper>
      <Title>About us</Title>
      <div className="about-content"></div>
    </Wrapper>
  );
}
