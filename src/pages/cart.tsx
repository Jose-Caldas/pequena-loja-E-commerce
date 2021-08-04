import Base from "../components/Base";
import CartList from "../components/CartList";
import { Container } from "../components/Container";
import { Grid } from "../components/Grid";
import Heading from "../components/Heading";
import MediaMatch from "../components/MediaMatch";
import SideBar from "../components/SideBar";
import * as S from "../styles/pages/cart.styles";

export default function Cart() {
  return (
    <Container>
      <Base>
        <S.Wrapper>
          <MediaMatch greaterThan="medium">
            <SideBar />
          </MediaMatch>
          <section>
            <Heading lineLeft>Cart</Heading>
            <Grid>
              <CartList />
            </Grid>
          </section>
        </S.Wrapper>
      </Base>
    </Container>
  );
}
