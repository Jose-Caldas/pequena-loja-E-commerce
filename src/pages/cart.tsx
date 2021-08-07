import Base from "../components/Base";
import CartList from "../components/CartList";
import { Container } from "../components/Container";
import Empty from "../components/Empty";
import Heading from "../components/Heading";
import Payment from "../components/Payment";
import cardsMock from "../components/Payment/mock";
import { useCart } from "../hooks/use-cart";

import * as S from "../styles/pages/cart.styles";

const cards = cardsMock;
export default function Cart() {
  const { items } = useCart();
  const handlePayment = () => {
    ({});
  };
  return (
    <Container>
      <Base>
        <Heading lineLeft lineColor="secondary" color="black">
          Cart
        </Heading>
        {items.length ? (
          <S.Wrapper>
            <CartList />
            <Payment cards={cards} handlePayment={handlePayment} />
          </S.Wrapper>
        ) : (
          <Empty
            title="Your cart is empty"
            description="Go back to the store and explore great offers."
            hasLink
          />
        )}
      </Base>
    </Container>
  );
}
