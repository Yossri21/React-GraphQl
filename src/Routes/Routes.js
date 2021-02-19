import React from 'react';
import { Provider } from 'urql';
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import {useQuery} from 'urql'
import isEmpty from 'lodash/isEmpty';
import Route from 'components/Route';
import LoginPage from 'pages/Login';
import AppRoutes from './AppRoutes';
import history from 'utils/history';
import client from 'graphql/client';
import {ME} from 'graphql/queries'

const Routes = () => {
  const { data, fetching } = useQuery({
    query: ME,
    requestPolicy: 'network-only',
    variables: {
      id: 2
    },
    
  });

  console.log(data)

const user = {}

  return (
    <Provider value={client}>
      <Router history={history}>
        <Switch>
          <Route
            path="/login"
            component={LoginPage}
            isAuthenticated={isEmpty(user)}
            redirectTo="/app/dashboard"
          />
          <Route
            path="/"
            component={AppRoutes}
            isAuthenticated={!isEmpty(user)}
            redirectTo="/login"
          />
        </Switch>
      </Router>
      </Provider>
  );
};
export default Routes;
