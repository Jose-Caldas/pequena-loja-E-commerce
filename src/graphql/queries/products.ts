import { gql, QueryHookOptions, useQuery } from "@apollo/client";
import {
  QueryProducts,
  QueryProductsVariables,
} from "../generated/QueryProducts";

export const QUERY_PRODUCTS = gql`
  query QueryProducts($id: [ID!]) {
    products(where: { id: $id }) {
      id
      name
      price
      slug
      image {
        url
      }
    }
  }
`;

export function useQueryProducts(
  options?: QueryHookOptions<QueryProducts, QueryProductsVariables>
) {
  return useQuery<QueryProducts, QueryProductsVariables>(
    QUERY_PRODUCTS,
    options
  );
}
