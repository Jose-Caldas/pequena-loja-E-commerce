import Link from "next/link";
import Button from "../Button";
import Heading from "../Heading";
import * as S from "./styles";

export type ProductCardProps = {
  title: string;
  price: string;
  image: string;
  slug: string;
};

const ProductCard = ({ title, price, image, slug }: ProductCardProps) => (
  <S.Wrapper>
    <Link href={`/product/${slug}`} passHref>
      <S.ImageBox>
        <img src={image} alt={title} />
      </S.ImageBox>
    </Link>

    <S.Content>
      <Link href={`/game/${slug}`} passHref>
        <S.GameInfo>
          <S.Title>
            <Heading lineBottom color="black">
              {title}
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
