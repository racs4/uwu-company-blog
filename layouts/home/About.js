import styled from "styled-components";
import Title from "../../components/Title";
import CardAbout from "../../components/CardAbout";

const Wrapper = styled.div`
  & .about-content {
    width: 100%;

    display: flex;
    flex-wrap: wrap;
    
    > * {
      margin-right: 130px;
    }
  }
`;

const Lista = [ {name: "Derenash", image: "", description: "Pro Gamer"},
                {name: "Kelvin", image: "", description: "Pro Programmer"},
                {name: "Lucas", image: "", description: "Pro Artist"}
              ]

export default function About({}) {
  return (
  <>
    <Wrapper id="about-us">
      <Title>About us</Title>
      <div className="about-content">
        {(Lista || []).map((item, i) => <CardAbout key={i} image={item.image} name={item.name} description={item.description}/>)}
      </div>
    </Wrapper>
  </>
  );
}
