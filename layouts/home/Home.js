import Card from "../../components/Card";
import Layout from "../../components/Layout";
import About from "./About";
import Categories from "./Categories";
import Divider from "./Divider";
import RecentlyPublished from "./RecentlyPublished";

export default function Home({ cards, published, categories }) {
  return (
    <>
      <Divider>
        {(cards || []).map((item, i) => (
          <Card title={item.title} content={item.content} key={i} />
        ))}
      </Divider>
      <Divider>
        <RecentlyPublished items={published || []} />
        <Categories categories={categories || []} />
      </Divider>
      <About />
    </>
  );
}
