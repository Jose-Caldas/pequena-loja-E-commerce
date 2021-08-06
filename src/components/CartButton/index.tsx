import {
  AddShoppingCart,
  RemoveShoppingCart,
} from "@styled-icons/material-outlined";
import { useCart } from "../../hooks/use-cart";
import Button, { ButtonProps } from "../Button";

export type CartButtonProps = {
  id: string;
  hasText?: boolean;
} & Pick<ButtonProps, "size">;

const CartButton = ({
  id,
  size = "small",
  hasText = false,
}: CartButtonProps) => {
  const { isInCart, addToCart, removeFromCart } = useCart();
  const ButtonText = isInCart(id) ? "Remove" : "Add";

  return (
    <Button
      icon={isInCart(id) ? <RemoveShoppingCart /> : <AddShoppingCart />}
      size={size}
      onClick={() => (isInCart(id) ? removeFromCart(id) : addToCart(id))}
      aria-label={ButtonText}
    >
      {hasText && ButtonText}
    </Button>
  );
};

export default CartButton;
