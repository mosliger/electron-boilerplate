import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import isEmpty from 'lodash/isEmpty';

export default (mapStateToProps = () => ({}), actions) => (Component) => {
  let mapDispatchToProps = (dispatch) => {
    return { actions: bindActionCreators(actions, dispatch) };
  };
  if (isEmpty(actions)) {
    mapDispatchToProps = dispatch => ({ dispatch });
  }
  const ConnectRedux = props => <Component {...props} />;

  return connect(
    mapStateToProps,
    mapDispatchToProps
  )(ConnectRedux);
};
