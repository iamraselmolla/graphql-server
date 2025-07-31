import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
// Define schema (typeDefs)
const typeDefs = `#graphql
  type Book {
    title: String
    author: String
  }

  type Query {
    books: [Book]
  }
`;
// Sample data
const books = [
    {
        title: "The Awakening",
        author: "Kate Chopin",
    },
    {
        title: "City of Glass",
        author: "Paul Auster",
    },
];
// Define resolvers
const resolvers = {
    Query: {
        books: () => books,
    },
};
// Create server with typeDefs and resolvers
const server = new ApolloServer({
    typeDefs,
    resolvers,
});
// Start the server
const { url } = await startStandaloneServer(server, {
    listen: { port: 4000 },
});
console.log(`🚀 Server ready at: ${url}`);
