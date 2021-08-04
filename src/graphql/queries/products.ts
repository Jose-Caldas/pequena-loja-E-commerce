import { gql } from "@apollo/client";

export const QUERY_PRODUCTS = gql`
  query GetProducts {
    products {
      name
      price
      slug
      image {
        url
      }
    }
  }
`;
