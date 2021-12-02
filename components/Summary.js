import Link from "next/link";
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

    cursor: pointer;
    color: ${({ theme }) => theme.color.primary};

    :hover {
      color: ${({ theme }) => theme.color.secondary};
    }
  }
`;

export default function Summary({ title, link, children }) {
  return (
    <Wrapper>
      <div className="summary-title">{title}</div>
      <div className="summary-text">{children}</div>
      <Link as={`/blog/${link}`} href="/blog/[slug]">
        <span className="summary-more">Read More</span>
      </Link>
    </Wrapper>
  );
}
