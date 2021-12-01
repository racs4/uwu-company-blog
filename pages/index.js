import Head from "next/head";
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme, GlobalStyles } from "../utils/themes.js";
import Home from "../layouts/home/Home";

// placeholders
const cards = [
  {
    title: "Kind",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sollicitudin velit nec libero lobortis, eget mattis odio dapibus. Sed convallis tincidunt eros, ac hendrerit quam euismod a. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Aenean faucibus odio sit amet pharetra malesuada. Phasellus pharetra dictum rhoncus. Maecenas at diam pretium, rhoncus turpis in, dapibus nunc. Donec et tempor dolor.",
  },
  { title: "Kind", content: "Kind is awesome" },
  { title: "Kind", content: "Kind is awesome" },
  { title: "Kind", content: "Kind is awesome" },
];

const published = [
  { title: "Vasco", text: "Vasco ".repeat(30) },
  { title: "Vasco", text: "Vasco ".repeat(30) },
];

const categories = ["Kind lang", "Vasco"];

export default function Index() {
  return <Home cards={cards} published={published} categories={categories} />;
}
