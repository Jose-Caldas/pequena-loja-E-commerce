import { Dropbox } from "@styled-icons/fa-brands";
import { ShoppingCart } from "@styled-icons/material-outlined/ShoppingCart";
import { FactCheck } from "@styled-icons/material-outlined/FactCheck";
import * as S from "./styles";
import Link from "next/link";

const SideBar = () => {
  return (
    <S.Wrapper>
      <S.Container>
        <Link href="/products" passHref>
          <a>
            <Dropbox />
            Products
          </a>
        </Link>
        <Link href="/orders" passHref>
          <a>
            <FactCheck />
            Orders
          </a>
        </Link>
        <Link href="cart" passHref>
          <a>
            <ShoppingCart />
            Cart
          </a>
        </Link>
      </S.Container>
    </S.Wrapper>
  );
};

export default SideBar;
