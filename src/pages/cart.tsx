import Base from "../components/Base";
import CartList from "../components/CartList";
import { Container } from "../components/Container";
import Heading from "../components/Heading";
import PaymentOptions from "../components/Payment";

import * as S from "../styles/pages/cart.styles";

export default function Cart() {
  return (
    <Container>
      <Base>
        <Heading lineLeft lineColor="secondary" color="black">
          Cart
        </Heading>
        <S.Wrapper>
          <CartList />
          <PaymentOptions />
        </S.Wrapper>
      </Base>
    </Container>
  );
}
