/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: QueryProducts
// ====================================================

export interface QueryProducts_products_image {
  __typename: "UploadFile";
  url: string;
}

export interface QueryProducts_products {
  __typename: "Products";
  id: string;
  name: string;
  price: number;
  slug: string;
  image: QueryProducts_products_image | null;
}

export interface QueryProducts {
  products: QueryProducts_products[];
}

export interface QueryProductsVariables {
  id?: string[] | null;
}
