import React, {useRef, useCallback} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {changeAuthorizationInfo, requiredAuthorization, changeErrorStatus} from '../../store/actions';
import {AuthorizationStatus, AuthorizationInfo} from '../../const';
import './style.scss';

const LoginScreen = () => {
  const {errorMessage} = useSelector((state) => state.USER);

  const dispatch = useDispatch();

  const emailRef = useRef();
  const passwordRef = useRef();

  const handleSubmit = useCallback((evt) => {
    evt.preventDefault();
    if (emailRef.current.value !== AuthorizationInfo.email || passwordRef.current.value !== AuthorizationInfo.password) {
      dispatch(changeErrorStatus(true));
      return;
    }

    dispatch(changeAuthorizationInfo({
      email: emailRef.current.value,
      password: passwordRef.current.value,
    }));
    dispatch(requiredAuthorization(AuthorizationStatus.AUTH));
    dispatch(changeErrorStatus(false));
  }, [dispatch]);

  return (
    <div className="page">
      <main className="main">
        <section className="login page__wrapper">
          <h1 className="page__title">Авторизация</h1>

          {errorMessage ? <span className="login__error">Неверный логин или пароль!</span> : ``}

          <form onSubmit={handleSubmit} className="login__form page__form" action="" method="post">
            <div className="login__input-wrapper">
              <label htmlFor="input-email" className="visually-hidden">Почта</label>
              <input className="login__input page__input" ref={emailRef} type="email" id="input-email" name="email" placeholder="Почта" required="required" />
            </div>

            <div className="login__input-wrapper">
              <label htmlFor="input-password" className="visually-hidden">Пароль</label>
              <input className="login__input page__input" ref={passwordRef} type="password" id="input-password" name="password" placeholder="Пароль" required="required" />
            </div>

            <button className="login__submit page__submit" type="submit">Войти</button>
          </form>
        </section>
      </main>
    </div>
  );
};

export default LoginScreen;
