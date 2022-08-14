import {createReducer} from '@reduxjs/toolkit';
import {AuthorizationStatus} from '../../const';
import {requiredAuthorization, changeAuthorizationInfo, changeErrorStatus} from '../actions';

const initialState = {
  authorizationStatus: AuthorizationStatus.NO_AUTH,
  authorizationInfo: {},
  errorMessage: false
};

const user = createReducer(initialState, (builder) => {
  builder.addCase(requiredAuthorization, (state, action) => {
    state.authorizationStatus = action.payload;
  });

  builder.addCase(changeAuthorizationInfo, (state, action) => {
    state.authorizationInfo = action.payload;
  });

  builder.addCase(changeErrorStatus, (state, action) => {
    state.errorMessage = action.payload;
  });
});

export {user};
