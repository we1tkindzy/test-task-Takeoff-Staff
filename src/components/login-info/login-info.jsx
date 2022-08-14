import React, {useCallback} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {changeAuthorizationInfo, requiredAuthorization, switchEditing} from '../../store/actions';
import {AuthorizationStatus} from '../../const';
import './style.scss';

const LoginInfo = () => {
  const {authorizationInfo} = useSelector((state) => state.USER);

  const dispatch = useDispatch();

  const logout = useCallback((evt) => {
    evt.preventDefault();

    dispatch(changeAuthorizationInfo({}));
    dispatch(requiredAuthorization(AuthorizationStatus.NO_AUTH));
    dispatch(switchEditing());
  });

  return (
    <div className="login-info">
      <div className="login-info__information">Вы вошли как <span>{authorizationInfo.email}</span></div>
      <button className="login-info__logout button button--logout" onClick={logout}>
        <span className="visually-hidden">Выйти</span>
        <svg className="login-info__icon" width="16" height="16">
          <use xlinkHref="#logout"/>
        </svg>
      </button>
    </div>
  );
};

export default LoginInfo;
