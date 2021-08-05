import Link from "next/link";
import { formatPrice } from "../../utils/formatPrice";
import Button from "../Button";
import Heading from "../Heading";
import { AddShoppingCart } from "@styled-icons/material-outlined/AddShoppingCart";

import * as S from "./styles";

export type ProductCardProps = {
  name: string;
  price: number;
  image: string;
  slug: string;
};

const ProductCard = ({ name, price, image, slug }: ProductCardProps) => (
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
        <Button size="small" icon={<AddShoppingCart />}>
          Buy now
        </Button>
      </S.BuyBox>
    </S.Content>
  </S.Wrapper>
);

export default ProductCard;
