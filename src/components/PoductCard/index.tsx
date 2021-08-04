import Link from "next/link";
import Button from "../Button";
import Heading from "../Heading";
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
        <S.GameInfo>
          <S.Title>
            <Heading lineBottom color="black">
              {name}
            </Heading>
          </S.Title>
        </S.GameInfo>
      </Link>

      <S.BuyBox>
        <S.Price>{price}</S.Price>
        <Button size="small">Buy now</Button>
      </S.BuyBox>
    </S.Content>
  </S.Wrapper>
);

export default ProductCard;
