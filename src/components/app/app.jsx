import React from 'react';
import {Switch, Route} from 'react-router-dom';
import LoginScreen from '../login-screen/login-screen';
import ContactsScreen from '../contacts-screen/contacts-screen';
import {AppRoute} from '../../const';
import PrivateRoute from '../private-route/private-route';
import NotFoundPageScreen from '../not-found-page/not-found-page';

const App = () => {
  return (
    <Switch>
      <PrivateRoute exact
        path={AppRoute.LOGIN}
        render={() => <LoginScreen />}
      >
      </PrivateRoute>

      <PrivateRoute exact
        path={AppRoute.CONTACTS}
        render={() => <ContactsScreen />}
      >
      </PrivateRoute>
      <Route>
        <NotFoundPageScreen />
      </Route>
    </Switch>
  );
};

export default App;
