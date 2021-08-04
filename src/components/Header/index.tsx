import { ShoppingCart } from "@styled-icons/material-outlined/ShoppingCart";
import Link from "next/link";
import Heading from "../Heading";

import { Wrapper } from "./styles";
const Header = () => (
  <Wrapper>
    <Link href="/">
      <a>Home</a>
    </Link>
    <Heading lineLeft>Products</Heading>
    <ShoppingCart size={20} />
  </Wrapper>
);

export default Header;
