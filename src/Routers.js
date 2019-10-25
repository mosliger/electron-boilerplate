import React from 'react';
import PropTypes from 'prop-types';
import { Route, Redirect, Switch } from 'react-router-dom';

import Home from './pages/Home';
import Login from './pages/Login';
import NoMatch from './pages/404';

const pages = [
  {
    path: '/',
    component: Home
  }
];

const PrivateRoute = ({ Component, isLogin, ...rest }) => {
  const handleRender = (props) => {
    if (!isLogin) return <Redirect to={{ pathname: '/login' }} />;
    return <Component {...props} />;
  };

  return <Route {...rest} render={handleRender} />;
};

PrivateRoute.propTypes = {
  Component: PropTypes.any.isRequired,
  isLogin: PropTypes.bool.isRequired
};

const RootRoute = ({ isLogin }) => {
  return (
    <Switch>
      {pages.map(page => (
        <PrivateRoute
          key={page.path}
          path={page.path}
          exact
          isLogin={isLogin}
          Component={page.component}
        />
      ))}

      <Route path="/login" exact component={Login} />
      <Route component={NoMatch} />
    </Switch>
  );
};

RootRoute.propTypes = {
  isLogin: PropTypes.bool.isRequired
};

export default RootRoute;
