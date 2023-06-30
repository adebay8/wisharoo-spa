const config = Object.freeze({
  API_URL: process.env.NEXT_PUBLIC_WISHAROO_API_URL,
  GRAPHQL_API_URL: process.env.NEXT_PUBLIC_WISHAROO_GRAPHQL_API_URL,
  constants: {
    ACCESS_TOKEN: "access_token",
    REFRESH_TOKEN: "refresh_token",
  },
});

export default config;
