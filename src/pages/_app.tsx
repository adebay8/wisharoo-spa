import { GraphQLClient } from "@/adapters/clients";
import { AppProvider } from "@/store";
import "@/styles/globals.scss";
import { ApolloProvider } from "@apollo/client";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ApolloProvider client={GraphQLClient}>
      <AppProvider>
        <Component {...pageProps} />
      </AppProvider>
    </ApolloProvider>
  );
}
