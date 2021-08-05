import { useCart } from "../../hooks/use-cart";
import * as S from "./styles";

export type ProductItemProps = {
  id: string;
  image: string;
  name: string;
  price: string;
};

const ProductItem = ({ id, image, name, price }: ProductItemProps) => {
  const { isInCart, removeFromCart } = useCart();
  return (
    <S.Wrapper>
      <S.Container>
        <S.ImageBox>
          <img src={image} alt={name} />
        </S.ImageBox>
        <S.Content>
          <S.Title>{name}</S.Title>
          <S.Group>
            <S.Price>{price}</S.Price>
            {isInCart(id) && (
              <S.Remove onClick={() => removeFromCart(id)}>Remove</S.Remove>
            )}
          </S.Group>
        </S.Content>
      </S.Container>
    </S.Wrapper>
  );
};

export default ProductItem;
