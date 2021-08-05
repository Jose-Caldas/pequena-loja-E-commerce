import { Story, Meta } from "@storybook/react/types-6-0";
import CartButton, { CartButtonProps } from "../CartButton";

export default {
  title: "CartButton",
  component: CartButton,
  parameters: {
    backgrounds: {
      default: "won-dark",
    },
  },
} as Meta;

export const Default: Story<CartButtonProps> = (args) => (
  <CartButton {...args} />
);
