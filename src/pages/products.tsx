import Base from "../components/Base";
import { Container } from "../components/Container";
import Heading from "../components/Heading";
import SideBar from "../components/SideBar";
import * as S from "../styles/pages/products.styles";
import { Grid } from "../components/Grid";
import ProductCard from "../components/PoductCard";
export default function Products() {
  return (
    <Container>
      <Base>
        <S.Main>
          <SideBar />
          <section>
            <Grid>
              <ProductCard
                title="Sandal"
                price="R$ 240,00"
                slug="sandal-1"
                image="img/sandalia300.png"
              />
              <ProductCard
                title="Sandal"
                price="R$ 240,00"
                slug="sandal-1"
                image="img/sandalia300.png"
              />
              <ProductCard
                title="Sandal"
                price="R$ 240,00"
                slug="sandal-1"
                image="img/sandalia300.png"
              />
            </Grid>
          </section>
        </S.Main>
      </Base>
    </Container>
  );
}
