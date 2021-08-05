import Link from "next/link";
import { formatPrice } from "../../utils/formatPrice";
import Heading from "../Heading";

import * as S from "./styles";
import CartButton from "../CartButton";

export type ProductCardProps = {
  id: string;
  name: string;
  price: number;
  image: string;
  slug: string;
};

const ProductCard = ({ name, price, image, slug, id }: ProductCardProps) => (
  <S.Wrapper>
    <Link href={`/product/${slug}`} passHref>
      <S.ImageBox>
        <img src={image} alt={name} />
      </S.ImageBox>
    </Link>

    <S.Content>
      <Link href={`/game/${slug}`} passHref>
        <S.Info>
          <S.Title>
            <Heading lineBottom lineColor="secondary" color="black">
              {name}
            </Heading>
          </S.Title>
        </S.Info>
      </Link>

      <S.BuyBox>
        <S.Price>{formatPrice(price)}</S.Price>
        <CartButton hasText id={id} />
      </S.BuyBox>
    </S.Content>
  </S.Wrapper>
);

export default ProductCard;
