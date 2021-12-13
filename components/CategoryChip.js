import styled from "styled-components";
import Link from "next/link";

const Wrapper = styled.div`
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

export default function CategoryChip({ category }) {
  return (
    <Link href={`/blog?category=${category}`} passHref>
      <Wrapper>{category}</Wrapper>
    </Link>
  );
}
