import styled from "styled-components";
import Image from "next/image";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
`;

const ImageWrapper = styled.div`
  width: 200px;
  height: 200px;
  border-radius: 9999px;
  position: relative;
  overflow: hidden;
  border: 5px solid;

  box-sizing: border-box;

  border-color: ${({ theme }) => theme.color.primary};
`;

const Name = styled.div`
  font-family: Montserrat;
  font-style: normal;
  font-weight: bold;
  font-size: 24px;
  margin: 26px 0;
  line-height: 29px;
  color: ${({ theme }) => theme.color.secondary};
`;

const Text = styled.div`
  font-family: Montserrat;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 20px;
  text-align: center;
  color: ${({ theme }) => theme.color.secondary};
`;

export default function CardAbout({ image, name, description }) {
  const loader = ({src, width}) => {
    return `https://avatars.dicebear.com/api/croodles-neutral/${src}.svg`;
  }

  return (
    <Wrapper>
      <ImageWrapper>
        <Image
          loader={loader}
          src={name}
          layout="fill"
          alt={`${name} avatar`}
        />
      </ImageWrapper>
      <Name>{name}</Name>
      <Text>{description}</Text>
    </Wrapper>
  );
}
