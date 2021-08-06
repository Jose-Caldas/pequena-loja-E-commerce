import React, { ReactNode } from "react";
import { Container } from "../Container";
import Menu from "../Menu";
import SideBar from "../SideBar";
import { Wrapper, Section } from "../../styles/pages/base.styles";
import MediaMatch from "../MediaMatch";

export type OrderProps = {
  children: ReactNode;
};

function Base({ children }: OrderProps) {
  return (
    <Container>
      <Menu />
      <Wrapper>
        <MediaMatch greaterThan="medium">
          <SideBar />
        </MediaMatch>
        <Section>{children}</Section>
      </Wrapper>
    </Container>
  );
}

export default Base;
