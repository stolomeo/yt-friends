import styled from "styled-components";
import Header from "./Header";
import Hero from "./Hero";

export default function Home() {
  return (
    <HomeWrapper>
      <Header />
      <Hero />
    </HomeWrapper>
  );
}

const HomeWrapper = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
