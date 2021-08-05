import { QueryProducts_products } from "../graphql/generated/QueryProducts";
import { formatPrice } from "./formatPrice";

export const productsMapper = (
  products: QueryProducts_products[] | null | undefined
) => {
  return products
    ? products.map((product) => ({
        id: product.id,
        name: product.name,
        slug: product.slug,
        image: `http://localhost:1337${product.image?.url}`,
        price: formatPrice(product.price),
      }))
    : [];
};
