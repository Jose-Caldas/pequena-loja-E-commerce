import { Dropbox } from "@styled-icons/fa-brands";
import { ShoppingCart } from "@styled-icons/material-outlined/ShoppingCart";
import { FactCheck } from "@styled-icons/material-outlined/FactCheck";
import * as S from "./styles";

const SideBar = () => (
  <S.Wrapper>
    <ul>
      <li>
        <Dropbox size={20} />
        <h2>Products</h2>
      </li>
      <li>
        <FactCheck size={20} />
        <h2>Orders</h2>
      </li>
      <li>
        <ShoppingCart size={20} />
        <h2>Cart</h2>
      </li>
    </ul>
  </S.Wrapper>
);

export default SideBar;
