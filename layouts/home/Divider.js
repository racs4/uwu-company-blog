import styled from "styled-components";

export default styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;

  & > * {
    width: max(48%, 348px);
  }
`;
