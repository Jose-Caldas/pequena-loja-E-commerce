import CartIcon from "../CartIcon";
import CartList from "../CartList";
import Dropdown from "../Dropdown";
import { Wrapper } from "./styles";

const CartDropdown = () => {
  return (
    <Wrapper>
      <Dropdown title={<CartIcon />}>
        <CartList hasButton />
      </Dropdown>
    </Wrapper>
  );
};

export default CartDropdown;
