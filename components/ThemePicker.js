import styled from "styled-components";

const Circle = styled.div`
  width: 100px;
  height: 100px;

  border-radius: 9999px;
  position: absolute;
  overflow: hidden;

  background: transparent;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-content: space-between;

  cursor: pointer;
  visibility: visible;

  &.show {
    /* visibility: visible; */
    animation: in 1s ease;
  }

  &.hidden {
    /* visibility: hidden; */
    animation: out 1s ease backwards;
    visibility: hidden;
  }

  @keyframes in {
    from {
      transform: scale(0) rotate(720deg);
    }
    to {
      transform: scale(1) rotate(0);
    }
  }

  @keyframes out {
    100% {
      opacity: 0;
      display: none;
      visibility: hidden;
    }
    99% {
      transform: scale(0) rotate(720deg);
    }
  }


`;

const Wrapper = styled.span`
  text-transform: uppercase;
  cursor: pointer;
`;

export default function ThemePicker({ theme, whenChooseTheme }) {

  const innactive = () => setActive(false);

  return (
    <>
      <Wrapper onClick={whenChooseTheme}>
        {theme && theme.charAt(0)}
      </Wrapper>
    </>
  );
}
