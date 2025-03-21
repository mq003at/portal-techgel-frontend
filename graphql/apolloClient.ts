import { ApolloClient, InMemoryCache } from "@apollo/client";
import { RestLink } from "apollo-link-rest";

const restLink = new RestLink({
  uri: "https://localhost:7188/api/", //  Base REST API URL
});

const client = new ApolloClient({
  link: restLink,
  cache: new InMemoryCache(),
});

export default client;
