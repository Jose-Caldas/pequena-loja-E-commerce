import Heading from "../Heading";
import Radio from "../Radio";
import * as S from "./styles";
import { Add, ShoppingCart } from "@styled-icons/material-outlined";
import Button from "../Button";

const Payment = () => {
  return (
    <S.Wrapper>
      <S.Body>
        <Heading lineBottom color="black" size="small">
          Payment
        </Heading>
        <S.CardsList>
          <S.CardItem>
            <S.CardInfo>
              <img src="/img/cards/visa.png" alt="visa" />
              <p>*** *** **** 4325</p>
              <Radio />
            </S.CardInfo>
          </S.CardItem>

          <S.AddCard role="button">
            <Add size={14} /> Add a new credit card
          </S.AddCard>
        </S.CardsList>
      </S.Body>
      <S.Footer>
        <Button as="a" fullWidth minimal>
          Continue shopping
        </Button>
        <Button fullWidth icon={<ShoppingCart />}>
          Buy now
        </Button>
      </S.Footer>
    </S.Wrapper>
  );
};

export default Payment;
