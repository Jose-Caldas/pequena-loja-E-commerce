import { Story, Meta } from "@storybook/react/types-6-0";
import CartList from ".";
import items from "../CartList/mock";

export default {
  title: "CartList",
  component: CartList,

  argTypes: {
    cartContextValue: {
      type: "",
    },
    items: {
      type: "",
    },
  },
} as Meta;

export const Default: Story = (args) => (
  <div style={{ maxWidth: 800 }}>
    <CartList {...args} />
  </div>
);
Default.args = {
  total: "R$ 330,00",
  cartContextValue: { items },
};

export const WithButton: Story = (args) => (
  <div style={{ maxWidth: 800 }}>
    <CartList {...args} />
  </div>
);

WithButton.args = {
  total: "R$ 330,00",
  cartContextValue: { items },
};

export const CartEmpty: Story = () => (
  <div style={{ maxWidth: 800 }}>
    <CartList />
  </div>
);
