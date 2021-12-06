import styled from "styled-components";

export default styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;

  & > * {
    width: max(46%, 350px);
    /* width: min(100%, 578px); */
  }

  @media screen and (max-width: 767px) {
    & > * {
      width: 100%;
      /* width: min(100%, 578px); */
    }
  }
`;
