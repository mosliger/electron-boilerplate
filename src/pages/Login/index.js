import React from 'react';
import PropTypes from 'prop-types';

import { connectRedux } from '../../utils';

import Style from './style';

const mapState = ({ user }) => ({ isLogin: user.isLogin });

const Login = ({ dispatch, history }) => {
  return (
    <Style>
      login
    </Style>
  );
};

Login.propTypes = {
  dispatch: PropTypes.func.isRequired,
  // isLogin: PropTypes.bool.isRequired,
  history: PropTypes.shape({
    push: PropTypes.func
  }).isRequired
};

export default connectRedux(mapState)(Login);
