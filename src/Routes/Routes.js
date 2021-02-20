import React from 'react';
import { Provider } from 'urql';
import { BrowserRouter as Router, Switch , Route} from 'react-router-dom';
import LoginPage from 'pages/Login';
import history from 'utils/history';
import client from 'graphql/client';
import Home from 'pages/Home';
import NotFound from 'pages/NotFound/NotFound';

const Routes = () => {

  return (
    <Provider value={client}>
      <Router history={history}>
        <Switch>
        <Route
            path="/login"
            component={LoginPage}
            exact
          />
      
          <Route
            path="/"
            component={Home}
             exact
          />
          <Route component={NotFound} />
        </Switch>
      </Router>
      </Provider>
  );
};


export default Routes;
 