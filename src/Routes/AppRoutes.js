import React from 'react';
import { Switch } from 'react-router-dom';
import Route from 'components/Route';
import Home from 'pages/Home';

const AppRoutes = () => {
  

  return (
  <div>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/app/dashboard" component={Home} />
    </Switch>
  </div>
)};

export default AppRoutes;
