import styled from "styled-components";
import Nav from "../components/Nav";

const Wrapper = styled.div`
  max-width: 1200px;
  width: 95%;
  margin: auto;
`;

export default function Layout({ children }) {
  return (
    <Wrapper>
      <Nav />
      {children}
    </Wrapper>
  );
}
