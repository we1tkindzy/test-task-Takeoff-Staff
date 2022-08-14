import {createReducer} from '@reduxjs/toolkit';
import {ContactFormStatus} from '../../const';
import {openContactForm} from '../actions';

const initialState = {
  contactForm: ContactFormStatus.CLOSE,
};

const data = createReducer(initialState, (builder) => {
  builder
    .addCase(openContactForm, (state, action) => {
      state.contactForm = action.payload;
    });
});

export {data};
