import { ApolloServer } from "@apollo/server";
import {startStandaloneServer} from "@apollo/server/standalone";
import fs from "fs";
const typeDefs = fs.readFileSync("./schema.graphql", "utf-8");

const server = new ApolloServer({
  typeDefs,
  resolvers: {
    Query: {
      cars: () => [{ id: 1, color: "blue", make: "Toyota" }],
    },
  },
});

const { url } = await startStandaloneServer(server, {
  context: async () => {
    return {
      cars: [{ id: 1, color: "blue", make: "Toyota" }],
    };
  }
});

console.log(`GraphQL Service running at ${url}`);