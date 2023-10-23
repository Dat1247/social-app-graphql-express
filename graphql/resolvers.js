import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export const resolvers = {
  Query: {
    Users: async(parent, args) => {
      return await prisma.users.findMany()
    },
    userById: async(parent, args, context) => {
      const changeTypeId = Number(args.id)
      return await prisma.users.findUnique({
        where: {
          id: changeTypeId
        }
      });
    },
    UserTypes: async(parent, args) => {
      return await prisma.usertypes.findMany()
    },
    ViewModes: async(parent, args) => {
      return await prisma.viewmodes.findMany()
    },
    Posts: async(parent, args) => {
      return await prisma.posts.findMany()
    },
    postById: async(parent, args) => {
      const changeTypeId = Number(args.id)
      return await prisma.posts.findUnique({
        where: {
          id: changeTypeId
        }
      })
    },
  },
  User: {
    Posts: async(parent, args) => {
      return await prisma.posts.findMany({
        where: {
          userID: parent.id
        }
      })
    },
  },
  Post: {
    user: async(parent, args) => {
      return await prisma.users.findUnique({
        where: {
          id: parent.userID
        }
      })
    }
  },
  
};