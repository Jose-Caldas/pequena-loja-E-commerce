import Base from "../components/Base";
import { Container } from "../components/Container";
import * as S from "../styles/pages/products.styles";
import ProductCard from "../components/ProductCard";
import { useQuery } from "@apollo/client";
import { initializeApollo } from "../utils/apollo";
import {
  QueryProducts,
  QueryProductsVariables,
} from "../graphql/generated/QueryProducts";
import { QUERY_PRODUCTS } from "../graphql/queries/products";
import Heading from "../components/Heading";

export default function Products() {
  const { data } = useQuery<QueryProducts, QueryProductsVariables>(
    QUERY_PRODUCTS
  );

  return (
    <Container>
      <Base>
        <Heading lineLeft lineColor="primary" size="medium" color="black">
          Products
        </Heading>
        <S.Wrapper>
          {data?.products.map((product) => (
            <ProductCard
              id={product.id}
              key={product.slug}
              name={product.name}
              price={product.price}
              slug={product.slug}
              image={`http://localhost:1337${product.image?.url}`}
            />
          ))}
        </S.Wrapper>
      </Base>
    </Container>
  );
}

export async function getServerSideProps() {
  const apollloClient = initializeApollo();

  const { data } = await apollloClient.query<
    QueryProducts,
    QueryProductsVariables
  >({
    query: QUERY_PRODUCTS,
  });
  return {
    props: {
      data: data,
      initialApolloState: apollloClient.cache.extract(),
    },
  };
}
