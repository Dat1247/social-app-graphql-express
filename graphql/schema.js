
export const typeDefs = `#graphql

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

  type usertype {
    id: ID!,
    value: String,
    name: String
  }

  type viewmode {
    id: ID!,
    value: String,
    description: String
  }

  type Query {
    usertypes: [usertype],
    viewmodes: [viewmode],
    users: [user],
  }
`;