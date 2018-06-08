import React from 'react';
import { Query } from "react-apollo";
import gql from "graphql-tag";

const GET_DATA = gql`{
  user {
    email
  }
}`;

const Dashboard = () => (
  <Query query={GET_DATA}>
    {({ loading, error, data }) => {
      return (
        <div>Dashboard</div>
      )
    }}
  </Query>
);

export default Dashboard;