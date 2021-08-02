import { ShoppingCart } from "@styled-icons/material-outlined/ShoppingCart";
import Heading from "../Heading";

import { Wrapper } from "./styles";
const Header = () => (
  <Wrapper>
    <h2>Home</h2>
    <Heading lineBottom>Store</Heading>
    <ShoppingCart size={20} />
  </Wrapper>
);

export default Header;
