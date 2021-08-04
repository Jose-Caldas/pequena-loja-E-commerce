import { Story, Meta } from "@storybook/react/types-6-0";

import ProductCard, { ProductCardProps } from ".";

export default {
  title: "ProductCard",
  component: ProductCard,
  args: {
    slug: "Sandal-1",
    title: "Sandal",

    image: "img/sandalia300.png",
    price: "R$ 240,00",
  },
} as Meta;

export const Default: Story<ProductCardProps> = (args) => (
  <div style={{ width: "30rem" }}>
    <ProductCard {...args}></ProductCard>
  </div>
);

Default.args = {};
