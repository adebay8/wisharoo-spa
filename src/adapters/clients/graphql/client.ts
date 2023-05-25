import config from "@/adapters/config";
import { ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
  uri: config.GRAPHQL_API_URL,
  cache: new InMemoryCache(),
});

export default client;
