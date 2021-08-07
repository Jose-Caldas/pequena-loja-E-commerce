import Heading from "../Heading";
import Radio from "../Radio";
import * as S from "./styles";
import Button from "../Button";
import { useState } from "react";
import Link from "next/link";

export type PaymentCard = {
  number: string;
  flag: string;
  img: string;
};

export type PaymentProps = {
  cards?: PaymentCard[];
  handlePayment: () => void;
};

const Payment = ({ handlePayment, cards }: PaymentProps) => {
  const [checked, setChecked] = useState(false);

  return (
    <S.Wrapper>
      <S.Body>
        <Heading lineBottom color="black" size="small">
          Choose the payment
        </Heading>
        <S.CardsList>
          {cards?.map((card) => (
            <S.CardItem key={card.number} {...card}>
              <S.CardInfo>
                <img src={card.img} alt={card.flag} />
                {card.number}
              </S.CardInfo>
              <Radio
                name="credit-card"
                id={card.number}
                value={card.number}
                onCheck={() => setChecked(true)}
              />
            </S.CardItem>
          ))}
        </S.CardsList>
      </S.Body>
      <S.Footer>
        <Link href="products" passHref>
          <Button as="a" fullWidth minimal>
            Continue shopping
          </Button>
        </Link>
        <Link href="/orders">
          <Button fullWidth onClick={handlePayment} disabled={!checked}>
            Continue to order
          </Button>
        </Link>
      </S.Footer>
    </S.Wrapper>
  );
};

export default Payment;
