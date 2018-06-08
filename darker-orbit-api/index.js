const { ApolloServer, gql } = require('apollo-server');
const { getApplications } = require('./resolvers/applications');
const { user } = require('./resolvers/user');

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
`;

const resolvers = {
  Query: {
    user: () => user,
    applications: () => getApplications(),
  },
};

const server = new ApolloServer({
  typeDefs,
  resolvers
});

server.listen().then(({
  url
}) => {
  console.log(`🚀  Server ready at ${url}`);
});