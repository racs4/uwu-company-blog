import styled from "styled-components";
import Image from "next/image";

import Chip from "../../components/Chip";
import Title from "../../components/Title";

import home_img from "../../static/images/home.png";

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  & .categories-chips {
    display: flex;
    flex-wrap: wrap;
    margin-bottom: 60px;
  }

  & .categories-chips > * {
    margin-right: 15px;
    margin-bottom: 15px;
  }
`;

const ImageWrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  
  @media screen and (min-width: 1200px) {
    animation: slide-in-right 500ms ease;
  }

  & #image-background {
    position: absolute;
    width: 100%;
    height: 50%;
    border-radius: 20px;
    background-color: ${({ theme }) => theme.color.primary};

    transform: translateY(50%);
  }
`;

export default function Categories({ categories }) {
  return (
    <Wrapper>
      <div>
        <Title>Categories</Title>
        <div className="categories-chips">
          {categories.map((categorie, i) => (
            <Chip key={i}>{categorie}</Chip>
          ))}
        </div>
      </div>
      <ImageWrapper>
        <div id="image-background"></div>
        <Image src={home_img} alt="Dev programming illustration" />
      </ImageWrapper>
    </Wrapper>
  );
}
