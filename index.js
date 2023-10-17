import { ApolloServer } from "@apollo/server";
import {expressMiddleware} from '@apollo/server/express4';
import { PrismaClient } from "@prisma/client";
import express from 'express';
import http from 'http';
import cors from 'cors';
import path from 'path';
import { fileURLToPath } from "url";

// import { typeDefs } from "./graphql/schema";
// import { resolvers } from "./graphql/resolvers";

const app = express();
const httpServer = http.createServer(app);
const port = process.env.PORT || 1234;
const prisma = new PrismaClient();
app.use(cors());
app.use(express.json());

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const publicPathDirectory = path.join(__dirname, "./public");
app.use("/public", express.static(publicPathDirectory));


const books = [
    {
      title: 'The Awakening',
      author: 'Kate Chopin',
    },
    {
      title: 'City of Glass',
      author: 'Paul Auster',
    },
  ];

const typeDefs = `#graphql
  type Book {
    title: String,
    author: String
  }

  type user {
    id: ID!
    name: String,
    username: String,
    email: String,
    phoneNumber: String,
    password: String,
    avatar: String,
    userType: String,
    createdAt: String,
    updatedAt: String
  }

  type Query {
    books: [Book]
    users: [user]
  }
`;

const resolvers = {
    Query: {
        books: () => books,
        users: () => {
            return prisma.users.findMany()
        }
    },
};

const server = new ApolloServer({
    typeDefs: typeDefs,
    resolvers: resolvers,
})
await server.start();
app.use('/graphql', expressMiddleware(server));

// app.listen(port, async() => {
//     console.log("App listening on port " + port)
// })

await new Promise((resolve) => httpServer.listen({ port: port }, resolve));

console.log(`🚀 Server ready at http://localhost:${port}/graphql`);


