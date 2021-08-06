import Base from "../components/Base";
import Button from "../components/Button";
import Heading from "../components/Heading";
import ProductItem from "../components/ProductItem";
import { useCart } from "../hooks/use-cart";
import * as S from "../styles/pages/orders.styles";

export default function Orders() {
  const { items, total } = useCart();
  return (
    <Base>
      <Heading color="black" lineLeft>
        Orders
      </Heading>
      <S.Wrapper>
        <S.Orders>
          {items.map((item) => (
            <ProductItem key={item.name} {...item} />
          ))}
        </S.Orders>
        <S.Payment>
          <S.Box>
            <Heading color="black" lineLeft lineColor="primary">
              Payment
            </Heading>
            <S.Section>
              <Heading lineBottom lineColor="secondary" color="black">
                Total: {total}
              </Heading>
              <S.Card>
                <p> Card: **** **** **** 4236</p>
                <img src="/img/cards/visa.png" alt="visa card" />
              </S.Card>
            </S.Section>
            <Button fullWidth>Purchase</Button>
          </S.Box>
        </S.Payment>
      </S.Wrapper>
    </Base>
  );
}
