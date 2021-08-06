import { Wrapper, Illustration, Header } from "./styles";
import {} from "@storybook/react";
import { Container } from "../Container";
import SideBar from "../SideBar";
import Heading from "../Heading";

export default function Home() {
  return (
    <Container>
      <Header>
        <Heading lineBottom lineColor="primary" size="huge">
          Wellcome to the Store!!
        </Heading>
      </Header>
      <Wrapper>
        <SideBar />
        <Illustration src="/hero-illustration.svg" />
      </Wrapper>
    </Container>
  );
}
