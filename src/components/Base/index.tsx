import { ReactNode } from "react";
import { Container } from "../Container";
import Header from "../Header";
import Menu from "../Menu";
import * as S from "./styles";

export type BaseProps = {
  children: ReactNode;
};

const Base = ({ children }: BaseProps) => (
  <S.Wrapper>
    <Container>
      <Menu></Menu>
    </Container>
    <S.Content>{children}</S.Content>
  </S.Wrapper>
);

export default Base;
