import { PrismaClient } from '@prisma/client';
import { ApolloServer } from '@apollo/server';
import { startServerAndCreateNextHandler } from '@as-integrations/next';
import prisma from '../../prisma/db';

import { typeDefs } from './schema.js';
import { resolvers } from './resolvers.js';


const apolloServer = new ApolloServer({
  typeDefs,
  resolvers,
});

export default startServerAndCreateNextHandler(apolloServer, {
  context: async (req, res) => ({req, res,prisma})
});