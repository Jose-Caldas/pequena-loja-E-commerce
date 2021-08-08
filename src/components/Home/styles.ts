import styled from "styled-components";

export const Wrapper = styled.main`
  width: 100%;
  height: calc(100vh - 60px);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const Header = styled.header`
  margin: 4rem 0;
`;

export const Illustration = styled.img`
  width: min(30rem, 100%);
`;
