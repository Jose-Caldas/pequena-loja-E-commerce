import { Wrapper, Illustration, Header } from "./styles";
import Heading from "../Heading";
import Button from "../Button";
import Link from "next/link";
import Menu from "../Menu";
import { Container } from "../Container";

export default function Home() {
  return (
    <Container>
      <Menu />
      <Wrapper>
        <Link href="products">
          <Button as="a">Products</Button>
        </Link>
        <Header>
          <Heading lineBottom lineColor="primary">
            Wellcome to the Store!!
          </Heading>
        </Header>
        <Illustration src="/hero-illustration.svg" />
      </Wrapper>
    </Container>
  );
}
