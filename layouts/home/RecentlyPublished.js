import Summary from "../../components/Summary.js";
import Title from "../../components/Title.js";

export default function RecentlyPublished({ items }) {
  return (
    <section>
      <Title>Recently Published</Title>
      {(items || []).map((item, i) => {
        return (
          <Summary key={i} title={item.title}>
            {item.description}
          </Summary>
        );
      })}
    </section>
  );
}
