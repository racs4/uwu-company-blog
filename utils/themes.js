import { createGlobalStyle } from "styled-components";
export const GlobalStyles = createGlobalStyle`
  html {
    scroll-behavior: smooth;
  }
  
  body {
    min-height: calc(100vh - 70px);
    background: ${({ theme }) => theme.background};
    color: ${({ theme }) => theme.color.secondary};
    font-family: Montserrat, sans-serif;
    font-size: 1rem;
    transition: all 200ms ease;
  }

  a {
    text-decoration: none;
  }

  @media screen and (max-width: 700px) {
    .mobile-hidden {
      display: none;
    }
  }

  @keyframes slide-in-right{
    from { transform: translateX(150px) }
    to { transform: translate(0) }
  }

  @keyframes fade-in {
    from { opacity: 0; }
    to { opacity: 1; }
  }
`;

export const lightTheme = {
  name: 'light',
  color: {
    primary: "#D05270",
    secondary: "#424242",
    negative: "white",
    title: "#5E6166",
  },
  text: "black",
  background: "white",
  background_code: "white",
};

export const darkTheme = {
  name: 'dark',
  color: {
    primary: "#E4E4E4",
    secondary: "#E4E4ff",
    negative: "black",
    title: "white",
  },
  text: "white",
  background: "linear-gradient(0deg, #222222 0%, #000 100%)",
  background_code: "#1d1515",
};
