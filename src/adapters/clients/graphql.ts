import config from "@/adapters/config";
import { ApolloClient, InMemoryCache, createHttpLink } from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import { useToken } from "@/hooks";

const httpLink = createHttpLink({
  uri: config.GRAPHQL_API_URL,
});

const authLink = setContext((_, { headers }) => {
  const [{ accessToken }] = useToken();

  return accessToken
    ? {
        headers: {
          ...headers,
          authorization: `JWT ${accessToken}`,
        },
      }
    : { headers };
});

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: authLink.concat(httpLink),
});

export default client;
