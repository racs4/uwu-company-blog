import styled from "styled-components";

export default styled.h1`
  font-family: Montserrat, sans-serif;
  font-style: normal;
  font-weight: bold;
  font-size: 1.5rem;
  line-height: 29px;
  letter-spacing: 0.2em;
  color: ${({ theme }) => theme.color.title};

  text-transform: uppercase;
`;
