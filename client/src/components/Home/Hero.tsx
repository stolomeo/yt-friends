import styled from "styled-components";

export default function Hero() {
  return (
    <HeroWrapper>
      <InfoSection>
        <Text>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quos
          assumenda soluta, neque nesciunt deserunt suscipit et unde voluptatem,
          in eveniet mollitia dicta? Rerum sit vitae qui quas ducimus asperiores
          perferendis?
        </Text>
        <Button>Get Started</Button>
      </InfoSection>
      <ImageSection>
        <Image />
      </ImageSection>
    </HeroWrapper>
  );
}

const HeroWrapper = styled.section`
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 4rem 6rem;
`;

const InfoSection = styled.section`
  width: 50%;
`;

const Text = styled.h2`
  line-height: 1.5;
  font-size: 32px;
`;

const Button = styled.button`
  width: 250px;
  height: 80px;
  font-size: 40px;
`;

const ImageSection = styled.section``;

const Image = styled.img`
  background-color: aquamarine;
  width: 600px;
  height: 300px;
`;
