import Image from "next/image";
import { useState } from "react";
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

  .icon {
    transition: all 5s ease;
    /* animation: fade-in 2s ease; */
  }
`;

const Icon = styled.div`
  width: 24px;
  height: 24px;
  background: ${({icon}) => `url(${icon})`};
  transition: all ease 700ms;
`

export default function ThemePicker({ theme, whenChooseTheme }) {
  const innactive = () => setActive(false);
  let [value, setValue] = useState("#FFFFFF");

  let inputElement = undefined;

  const handleClick = (e) => {
    if (inputElement) {
      inputElement.click();
    }
  };

  const luaIcon = "../static/icons/lua.svg";
  const solIcon = "../static/icons/sol.svg";

  return (
    <>
      {/* <div
        style={{
          display: "inline-block",
          width: "1rem",
          height: "1rem",
          borderRadius: "9999px",
          background: value || "#ffffff",
          border: "1px dashed black",
        }}
        onClick={handleClick}
      >
        <input
          ref={(input) => (inputElement = input)}
          type="color"
          style={{
            visibility: "hidden",
            width: "0",
            height: "0",
            padding: "0",
            border: "0",
          }}
          // onInput={(e) => { setValue(inputElement?.value || "#FFFFFF"); whenChooseTheme({ color: { primary: value }}) }}
        ></input>
      </div> */}
      <Wrapper onClick={whenChooseTheme}>
        <Icon icon={theme === "light" ? luaIcon : solIcon} />
      </Wrapper>
    </>
  );
}