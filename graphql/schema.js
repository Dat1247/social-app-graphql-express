
export const typeDefs = `#graphql
  scalar JSON
  scalar JSONObject

  type User {
    id: ID!
    name: String,
    username: String,
    email: String,
    phoneNumber: String,
    password: String,
    avatar: String,
    userType: String,
    createdAt: String,
    updatedAt: String,
    Posts: [Post]
  }

  type UserType {
    id: ID!,
    value: String,
    name: String
  }

  type ViewMode {
    id: ID!,
    value: String,
    description: String
  }

  type Post {
    id: ID!,
    userID: String,
    content: String,
    viewMode: String,
    fileUpload: JSON,
    user: User,
    createdAt: String,
    updatedAt: String
  }

  type Query {
    UserTypes: [UserType],
    ViewModes: [ViewMode],
    Users: [User],
    userById(id: ID!): User,
    Posts: [Post]
    postById(id: ID!): Post,
  }
`;