import { ApolloServer, } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import { readFileSync } from "fs";
import resolvers from "./resolvers.js";
import { products, categories,reviews } from "./db.js";
const server = new ApolloServer({
    typeDefs: readFileSync("./typedefs.graphql", "utf-8"),
    resolvers,
});


const { url } = await startStandaloneServer(server, {
    context: async () => {
        return {
            products,
            categories,
            reviews
        };
    },
});

console.log(`GraphQL Service running at ${url}`);