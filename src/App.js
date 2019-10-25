import React from 'react';
import { MemoryRouter as Router } from 'react-router-dom';
import { Global, css } from '@emotion/core';
import PropTypes from 'prop-types';

import Routers from './Routers';
import { connectRedux } from './utils';
import { initApp } from './actions/action';

import { Navigation } from './components';

const globalStyles = css``;

const mapState = ({ user }) => ({ isLogin: user.isLogin });

const App = (props) => {
  React.useEffect(() => {
    console.log('props >>', props);
    props.dispatch(initApp());
  }, []); // eslint-disable-line

  return (
  <Router>
    <div className="wrap-page">
      <Global styles={globalStyles} />
      <Navigation />
      <Routers isLogin={props.isLogin} />
    </div>
  </Router>
)};

App.propTypes = {
  isLogin: PropTypes.bool.isRequired
};

export default connectRedux(mapState)(App);
