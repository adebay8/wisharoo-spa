import { GraphQLClient } from "@/adapters/clients";
import "@/styles/globals.scss";
import { ApolloProvider } from "@apollo/client";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ApolloProvider client={GraphQLClient}>
      <Component {...pageProps} />
    </ApolloProvider>
  );
}
