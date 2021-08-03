import type { AppProps } from "next/app";
import { ApolloProvider } from "@apollo/client";
import { ThemeProvider } from "styled-components";
import Head from "next/head";
import { GlobalStyles } from "../styles/globals";
import theme from "../styles/theme";
import { useApollo } from "../utils/aplollo";

function App({ Component, pageProps }: AppProps) {
  const client = useApollo(pageProps.initialApolloState);

  return (
    <ApolloProvider client={client}>
      <ThemeProvider theme={theme}>
        <Head>
          <title>Projeto 1</title>
          <link rel="shortcut icon" href="/icon-512.png" />
          <link rel="apple-touch-icon" href="/icon-512.png" />
          <link rel="manifest" href="/manifest.json" />
          <meta
            name="description"
            content="A simple project starter to work with TypeScript, React, NextJS and Styled Components"
          />
        </Head>
        <Component {...pageProps} />
        <GlobalStyles />
      </ThemeProvider>
    </ApolloProvider>
  );
}
export default App;
