import { Menu2 as MenuIcon } from "@styled-icons/remix-fill/Menu2";
import { Close as CloseIcon } from "@styled-icons/material-outlined/Close";

import * as S from "./styles";
import Link from "next/link";
import { useState } from "react";
import MediaMatch from "../MediaMatch";
import CartIcon from "../CartIcon";

const Menu = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <S.Wrapper isOpen={isOpen}>
      <MediaMatch lessThan="medium">
        <S.IconWrapper onClick={() => setIsOpen(true)}>
          <MenuIcon aria-label="Open Menu" />
        </S.IconWrapper>
      </MediaMatch>

      <S.LinkWrapper>
        <Link href="/" aria-label="Home">
          <a>Home</a>
        </Link>
      </S.LinkWrapper>

      <S.LinkWrapper>
        <Link href="/cart">
          <a>
            <CartIcon />
          </a>
        </Link>
      </S.LinkWrapper>
      <S.MenuFull aria-hidden={!isOpen} isOpen={isOpen}>
        <CloseIcon aria-label="Close Menu" onClick={() => setIsOpen(false)} />
        <S.MenuNav>
          <S.MenuLink href="/">Home</S.MenuLink>
          <S.MenuLink href="products">Products</S.MenuLink>
          <S.MenuLink href="cart">Cart</S.MenuLink>
        </S.MenuNav>
      </S.MenuFull>
    </S.Wrapper>
  );
};

export default Menu;
