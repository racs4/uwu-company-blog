import Home from "../layouts/home/Home";
import fs from "fs";
import matter from "gray-matter";
import path from "path";
import { postFilePaths, POSTS_PATH } from "../utils/mdxUtils";

// placeholders
const cards = [
  {
    title: "Kind",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sollicitudin velit nec libero lobortis, eget mattis odio dapibus. Sed convallis tincidunt eros, ac hendrerit quam euismod a.",
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

export default function Index({ recently_published, categories }) {
  return (
    <Home
      cards={cards}
      published={recently_published}
      categories={categories}
    />
  );
}

export function getStaticProps() {
  let categories = new Set();
  const recently_published = postFilePaths
    .map((filePath) => {
      const source = fs.readFileSync(path.join(POSTS_PATH, filePath));
      const { _, data } = matter(source);

      if (data.category && data.published) {
        categories.add(data.category);
      }

      return { ...data, filePath };
    })
    .filter((data) => data.published)
    .sort(
      (dataA, dataB) =>
        new Date(dataB.publishedOn) - new Date(dataA.publishedOn)
    )
    .slice(0, 5);
  categories = Array.from(categories.values());
  return { props: { recently_published, categories } };
}
