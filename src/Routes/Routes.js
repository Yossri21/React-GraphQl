import React from 'react';
import { Provider } from 'urql';
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import isEmpty from 'lodash/isEmpty';
import Route from 'components/Route';
import LoginPage from 'pages/Login';
import AppRoutes from './AppRoutes';
import history from 'utils/history';
import client from 'graphql/client';
import {validToken} from 'utils/tokens'

const Routes = () => {

console.log("Routes")
  
const user =   validToken() ?  {isAuthenticated : true} : {}  
 
  return (
    <Provider value={client}>
      <Router history={history}>
        <Switch>
        <Route
            path="/login"
            component={LoginPage}
        //    isAuthenticated={isEmpty(user)}
            redirectTo="/"
        
          />
      
          <Route
            path="/"
            component={AppRoutes}
        //    isAuthenticated={!isEmpty(user)}
            redirectTo="/login"
          />
        </Switch>
      </Router>
      </Provider>
  );
};
export default Routes;

const Open = ()=>{
  return <p>Open</p>
}