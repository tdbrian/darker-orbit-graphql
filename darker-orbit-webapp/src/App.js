import React from 'react';
import { Query } from "react-apollo";
import gql from "graphql-tag";
import { Switch, Route } from 'react-router';

import Header from './components/Header';
import Dashboard from './pages/Dashboard';

const GET_DATA = gql`{
  user {
    email
  }
}`;

const App = () => (
  <Query query={GET_DATA}>
    {({ loading, error, data }) => {
      return (
        <section>
          <Header loading={loading} user={data.user} />
          <Switch>
            <Route exact path="/" component={Dashboard}/>
            <Route path="/dashboard" component={Dashboard}/>
            {/* <Route component={NoMatch}/> */}
          </Switch>
        </section>
      )
    }}
  </Query>
);

export default App;
