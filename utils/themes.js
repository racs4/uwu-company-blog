import { createGlobalStyle } from "styled-components";
export const GlobalStyles = createGlobalStyle`
  body {
    background: ${({ theme }) => theme.background};
    color: ${({ theme }) => theme.color.secondary};
    font-family: Montserrat, sans-serif;
    font-size: 1rem;
    transition: all 200ms ease;
  }
`;

export const lightTheme = {
  color: {
    primary: "#D05270",
    secondary: "#424242",
    negative: "white",
    title: "#5E6166",
  },
  text: "black",
  background:
    "linear-gradient(180deg, #E2F7FE 0%, rgba(226, 247, 254, 0) 100%)",
};

export const darkTheme = {
  color: {
    primary: "#E4E4E4",
    secondary: "#E4E4ff",
    negative: "black",
    title: "white",
  },
  text: "white",
  background: "linear-gradient(0deg, #222222 0%, #000 100%)",
};