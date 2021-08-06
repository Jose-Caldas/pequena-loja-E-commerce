import styled from "styled-components";

export const Wrapper = styled.main`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  margin-top: 20rem;
`;

export const Header = styled.header`
  margin-top: 15rem;
  display: flex;
  justify-content: center; ;
`;

export const Illustration = styled.img`
  width: min(30rem, 100%);
`;
