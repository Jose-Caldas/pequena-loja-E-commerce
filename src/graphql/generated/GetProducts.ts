/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GetProducts
// ====================================================

export interface GetProducts_products_image {
  __typename: "UploadFile";
  url: string;
}

export interface GetProducts_products {
  __typename: "Products";
  name: string;
  price: number;
  slug: string;
  image: GetProducts_products_image | null;
}

export interface GetProducts {
  products: GetProducts_products[];
}
