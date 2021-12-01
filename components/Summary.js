import styled from "styled-components";

const Wrapper = styled.div`
  margin-bottom: 40px;

  & .summary-title {
    font-weight: 600;
    font-size: 1.5rem;
    line-height: 29px;

    color: ${({ theme }) => theme.color.primary};

    margin-bottom: 20px;
  }

  & .summary-text {
    line-height: 20px;

    margin-bottom: 30px;
  }

  & .summary-more {
    font-weight: 500;
    line-height: 20px;
    text-transform: uppercase;

    color: ${({ theme }) => theme.color.primary};
  }
`;

export default function Summary({ title, children }) {
  return (
    <Wrapper>
      <div className="summary-title">{title}</div>
      <div className="summary-text">{children}</div>
      <div className="summary-more">Read More</div>
    </Wrapper>
  );
}
