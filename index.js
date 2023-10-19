import { ApolloServer } from "@apollo/server";
import {expressMiddleware} from '@apollo/server/express4';
import { PrismaClient } from "@prisma/client";
import express from 'express';
import http from 'http';
import cors from 'cors';
import path from 'path';
import { fileURLToPath } from "url";

import {typeDefs} from "./graphql/schema.js";
import { resolvers } from "./graphql/resolvers.js";

const app = express();
const httpServer = http.createServer(app);
const port = process.env.PORT || 1234;

app.use(cors());
app.use(express.json());

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const publicPathDirectory = path.join(__dirname, "./public");
app.use("/public", express.static(publicPathDirectory));

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


