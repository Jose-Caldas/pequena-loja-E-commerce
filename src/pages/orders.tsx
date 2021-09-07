import Link from "next/link";
import Base from "../components/Base";
import Button from "../components/Button";
import Empty from "../components/Empty";
import Heading from "../components/Heading";
import ProductItem from "../components/ProductItem";
import { useCart } from "../hooks/use-cart";
import * as S from "../styles/pages/orders.styles";
import cardsMock from "../components/Payment/mock";
import { Container } from "../components/Container";

const cards = cardsMock;

export default function Orders() {
  const { items, total, clearCart } = useCart();
  return (
    <Container>
      <Base>
        <Heading color="black" lineLeft>
          Orders
        </Heading>
        <S.Wrapper>
          {items.length ? (
            <>
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
                      {cards?.map((card) => (
                        <S.CardItem key={card.number}>
                          <S.CardInfo>
                            <img src={card.img} alt={card.flag} />
                            {card.number}
                          </S.CardInfo>
                        </S.CardItem>
                      ))}
                    </S.Card>
                  </S.Section>
                  <Link href="/success" passHref>
                    <Button as="a" fullWidth onClick={clearCart}>
                      Purchase
                    </Button>
                  </Link>
                </S.Box>
                <div>
                  <Link href="/cart">
                    <Button as="a" minimal>
                      Cancel
                    </Button>
                  </Link>
                  <Link href="/products">
                    <Button as="a" minimal>
                      Add more
                    </Button>
                  </Link>
                </div>
              </S.Payment>
            </>
          ) : (
            <Empty
              title="Your order list is empty"
              description="Return to the Store"
              hasLink
            />
          )}
        </S.Wrapper>
      </Base>
    </Container>
  );
}
