import React from 'react';
import { Provider } from 'urql';
import { BrowserRouter as Router, Redirect, Switch , Route} from 'react-router-dom';
import LoginPage from 'pages/Login';
import history from 'utils/history';
import client from 'graphql/client';
import Home from 'pages/Home';

const Routes = () => {

console.log("Routes") 
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
        </Switch>
      </Router>
      </Provider>
  );
};
export default Routes;
 