import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
`;

const Image = styled.div`
  width: 200px;
  height: 200px;
  border-radius: 9999px
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
`

export default function CardAbout({image, name, description}){
  return (
    <Wrapper>
      <Image>{image}</Image>
      <Name>{name}</Name>
      <Text>{description}</Text>
    </Wrapper>
  )
  
}
