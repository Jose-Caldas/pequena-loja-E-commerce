import Base from "../components/Base";
import { Container } from "../components/Container";
import SideBar from "../components/SideBar";
import * as S from "../styles/pages/products.styles";
import { Grid } from "../components/Grid";
import ProductCard from "../components/ProductCard";
import { gql, useQuery } from "@apollo/client";
import { initializeApollo } from "../utils/aplollo";

export const GET_PRODUCTS = gql`
  query getProducts {
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

export default function Products() {
  const { data } = useQuery(GET_PRODUCTS);

  console.log(data);

  return (
    <Container>
      <Base>
        <S.Main>
          <SideBar />
          <section>
            <Grid>
              {data.products.map((product) => (
                <ProductCard
                  key={product.slug}
                  name={product.name}
                  price={product.price}
                  slug={product.slug}
                  image={`http://localhost:1337${product.image.url}`}
                />
              ))}
            </Grid>
          </section>
        </S.Main>
      </Base>
    </Container>
  );
}

export async function getServerSideProps() {
  const apollloClient = initializeApollo();

  const { data } = await apollloClient.query({ query: GET_PRODUCTS });
  return {
    props: {
      data: data,
      initialApolloState: apollloClient.cache.extract(),
    },
  };
}
