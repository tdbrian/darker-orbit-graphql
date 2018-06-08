const { ApolloServer, gql } = require('apollo-server');
const applications = require('./resolvers/applications');
const { user } = require('./resolvers/user');
const mongoose = require('mongoose');

const typeDefs = gql `
  type Application {
    id: ID
    name: String
    type: String
  }

  type User {
    firstName: String
    lastName: String,
    email: String
  }

  type Query {
    user: User
    applications: [Application]
  }

  input ApplicationInput {
    name: String!
    type: String!
  }

  type Mutation {
    addApplication(app: ApplicationInput): Application
  }
`;

const resolvers = {
  Query: {
    user: () => user,
    applications: applications.getApplications,
  },
  Mutation: {
    addApplication: applications.createApplication 
  }
};

const server = new ApolloServer({
  typeDefs,
  resolvers
});

mongoose.connect('mongodb://localhost:38611/darkerorbit');

server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});