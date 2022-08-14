import React from 'react';
import {Link} from 'react-router-dom';
import {AppRoute} from '../../const';
import './style.scss';

const NotFoundPage = () => {
  return (
    <div className="not-found">
      <h1>404 Not Found</h1>
      <Link to={AppRoute.LOGIN}>Вернуться на главную страницу</Link>
    </div>
  );
};

export default NotFoundPage;
