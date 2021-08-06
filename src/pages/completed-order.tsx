import Heading from "../components/Heading";
import { useCart } from "../hooks/use-cart";
import * as S from "../styles/pages/completedOrder.styles";

export default function CompleteOrder() {
  const { items, total } = useCart();
  return (
    <S.Wrapper>
      <img src="/img/confetti.png" alt="" />
      <S.Content>
        <Heading color="black" lineLeft lineColor="secondary" size="huge">
          Your order was completed successfully.
        </Heading>
        <S.Box>
          {items.length &&
            items.map((item) => (
              <S.Item key={item.id}>
                <Heading color="black" size="medium">
                  {item.name}
                </Heading>
                <Heading color="black" size="small">
                  {item.price}
                </Heading>
              </S.Item>
            ))}
          <footer>
            <Heading color="white">Total: {total}</Heading>
          </footer>
        </S.Box>
      </S.Content>
    </S.Wrapper>
  );
}
