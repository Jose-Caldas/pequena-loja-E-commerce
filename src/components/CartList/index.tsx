import Link from "next/link";
import Button from "../Button";
import Empty from "../Empty";
import * as S from "./styles";
import { useCart } from "../../hooks/use-cart";
import ProductItem from "../ProductItem";

export type CartListProps = {
  hasButton?: boolean;
};

const CartList = ({ hasButton = false }: CartListProps) => {
  const { items, total, loading } = useCart();

  if (loading) {
    return (
      <S.Loading>
        <p>Loading...</p>
      </S.Loading>
    );
  }

  return (
    <S.Wrapper isEmpty={!items.length} data-cy="cart-list">
      {items.length ? (
        <>
          <S.GamesList>
            {items.map((item) => (
              <ProductItem key={item.name} {...item} />
            ))}
          </S.GamesList>

          <S.Footer>
            {!hasButton && <span>Total:</span>}
            <S.Total>{total}</S.Total>

            {hasButton && (
              <Link href="/cart" passHref>
                <Button>Buy it now</Button>
              </Link>
            )}
          </S.Footer>
        </>
      ) : (
        <Empty
          title="Your cart is empty"
          description="Go back to the store and explore great offers."
          hasLink
        />
      )}
    </S.Wrapper>
  );
};

export default CartList;
