import styled from "styled-components";

export default styled.div`
  background: ${({ theme }) => theme.color.primary};
  border-radius: 20px;

  font-weight: bold;

  line-height: 20px;

  color: ${({ theme }) => theme.color.negative};

  text-transform: capitalize;
  padding: 8px 20px;

  cursor: pointer;

  transition: all 200ms ease;
  &:hover {
    background-color: ${({ theme }) => theme.color.secondary};
  }
`;
