import styled from "styled-components";

const Item = styled.div`
  filter: brightness(1.5);
  height: 30px;
  width: 30px;
  background: ${({ theme, active }) => (active ? theme.color.primary : theme.color.secondary)};
  color: ${({ theme }) => (theme.color.negative)};
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  :hover {
    background: ${({theme}) => theme.color.primary};
    box-shadow: 0 0 5px 0 rgba(0,0,0,0.5);
  }
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  margin: 50px 0;
`;

export default function Pagination({ total, page, whenPageChange }) {
  total = Number(total) || 20;
  page = Number(page) || 1;
  whenPageChange = whenPageChange || (() => {});

  page = Math.min(page, total);

  const minimum = Math.max(1, page - 2);
  const maximum = Math.min(total, page + 2);

  const itens = range(minimum, maximum);

  const goPrevOrNext = (prev) => {
    if (prev) {
      if (page > 1) {
        whenPageChange(page - 1);
      }
    } else {
      whenPageChange(page + 1);
    }
  };

  return (
    <Wrapper>
      {
        page > 1 &&

      <Item
      active={false}
      disabled={page === 1}
      onClick={() => goPrevOrNext(true)}
    >
      {"<"}
    </Item>
      }
      {itens.map((item) => {
        return (
          <Item
            active={item === page}
            key={item}
            onClick={() => whenPageChange(item)}
          >
            {item}
          </Item>
        );
      })}
      {page < total && (
        <Item active={false} onClick={() => goPrevOrNext(false)}>
          {">"}
        </Item>
      )}
    </Wrapper>
  );
}

const range = (start, stop) =>
  Array.from(
    {
      length: stop - start + 1,
    },
    (_, i) => start + i
  );
