import React from 'react';
import * as Proptypes from 'prop-types';
import { Route as DomRoute, Redirect } from 'react-router-dom';

const Route = ({
  component: Component, isAuthenticated, redirectTo, ...rest
}) => { 
  return (
  <DomRoute
    {...rest}
    render={() => (isAuthenticated ? <Component {...rest} /> : <Redirect to={redirectTo} />)}
  />
)};

Route.propTypes = {
  component: Proptypes.any.isRequired,
  isAuthenticated: Proptypes.bool,
};

Route.defaultProps = {
  isAuthenticated: true,
};

export default Route;
