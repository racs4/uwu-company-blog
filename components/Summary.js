import Link from "next/link";
import styled from "styled-components";

const Wrapper = styled.div`
  margin-bottom: 40px;

  & .summary-title {
    font-weight: 600;
    font-size: 1.5rem;
    line-height: 29px;

    color: ${({ theme }) => theme.color.primary};
    
    margin-top: 2px;
    margin-bottom: 5px;
    cursor: pointer;

    :hover {
      color: ${({ theme }) => theme.color.secondary};
    }
  }

  & .summary-text {
    line-height: 20px;

    margin-bottom: 30px;
  }

  & .summary-more {
    font-weight: 500;
    line-height: 20px;
    text-transform: uppercase;

    cursor: pointer;
    color: ${({ theme }) => theme.color.primary};

    :hover {
      color: ${({ theme }) => theme.color.secondary};
    }
  }

  & .summary-date {
    font-size: 0.8rem;
    font-weight: 600;
    color: ${({ theme }) => theme.color.primary};
  }
`;

const Divider = styled.hr`
  margin-top: 30px;
`;

export default function Summary({ title, link, children, date }) {
  return (
    <Wrapper>
      <span className="summary-date">{date}</span>
      <Link as={`/${link}`} href="/[slug]">
        <div className="summary-title">{title}</div>
      </Link>
      <div className="summary-text">{children}</div>
      {/* <Divider/> */}
    </Wrapper>
  );
}
