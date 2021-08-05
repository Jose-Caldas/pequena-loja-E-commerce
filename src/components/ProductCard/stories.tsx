import { Story, Meta } from "@storybook/react/types-6-0";

import ProductCard, { ProductCardProps } from ".";

export default {
  title: "ProductCard",
  component: ProductCard,
  args: {
    slug: "Sandal-1",
    name: "Sandal",

    image: "img/sapatofem300.png",
    price: 240,
  },
} as Meta;

export const Default: Story<ProductCardProps> = (args) => (
  <div style={{ width: "30rem" }}>
    <ProductCard {...args}></ProductCard>
  </div>
);

Default.args = {};
