import React from 'react';
import PropTypes from 'prop-types';
import {Route, Redirect} from 'react-router-dom';
import {useSelector} from 'react-redux';
import {AuthorizationStatus, AppRoute} from '../../const';

const PrivateRoute = ({render, path, exact}) => {
  const {authorizationStatus} = useSelector((state) => state.USER);

  return (
    <Route
      path={path}
      exact={exact}
      render={(routeProps) => {
        switch (path) {
          case AppRoute.LOGIN:
            return (
              authorizationStatus === AuthorizationStatus.NO_AUTH
                ? render(routeProps)
                : <Redirect to={AppRoute.CONTACTS} />
            );
          default:
            return (
              authorizationStatus === AuthorizationStatus.AUTH
                ? render(routeProps)
                : <Redirect to={AppRoute.LOGIN} />
            );
        }
      }}
    />
  );
};

PrivateRoute.propTypes = {
  exact: PropTypes.bool.isRequired,
  path: PropTypes.string.isRequired,
  render: PropTypes.func.isRequired,
};

export default PrivateRoute;
