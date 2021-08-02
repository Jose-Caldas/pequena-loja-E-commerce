import { Container } from "../components/Container";
import Header from "../components/Header";
import Heading from "../components/Heading";
import SideBar from "../components/SideBar";
import * as S from "../styles/pages/products.styles";
export default function Products() {
  return (
    <S.Wrapper>
      <Header />
      <Container>
        <SideBar />
        <S.Content>
          <Heading lineLeft color="black">
            Products
          </Heading>
        </S.Content>
      </Container>
    </S.Wrapper>
  );
}
