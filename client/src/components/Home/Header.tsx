import styled from "styled-components";

export default function Header() {
  return (
    <HeaderWrapper>
      <HeaderText>WeTube</HeaderText>
    </HeaderWrapper>
  );
}

const HeaderWrapper = styled.header`
  font-size: 24px;
  padding: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
`;

const HeaderText = styled.h1``;
