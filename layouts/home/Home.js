import styled from "styled-components";
import Card from "../../components/Card";
import About from "./About";
import Categories from "./Categories";
import Divider from "./Divider";
import RecentlyPublished from "./RecentlyPublished";

const HomeCardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export default function Home({ cards, published, categories }) {
  return (
    <>
      <Divider>
        <HomeCardWrapper>
          {(cards || []).slice(0, 2).map((item, i) => (
            <Card title={item.title} content={item.content} key={i} />
          ))}
        </HomeCardWrapper>
        <HomeCardWrapper>
          {(cards || []).slice(2).map((item, i) => (
            <Card title={item.title} content={item.content} key={i} />
          ))}
        </HomeCardWrapper>
      </Divider>
      <Divider>
        <RecentlyPublished items={published || []} />
        <Categories categories={categories || []} />
      </Divider>
      <About />
    </>
  );
}
