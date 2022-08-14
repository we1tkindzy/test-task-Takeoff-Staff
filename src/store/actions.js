import {createAction} from "@reduxjs/toolkit";

export const ActionType = {
  CHANGE_AUTHORIZATION_INFO: `user/changeLogin`,
  REQUIRED_AUTHORIZATION: `user/requiredAuthorization`,
  REDIRECT_TO_ROUTE: `user/redirectToRoute`,
  IS_ERROR: `user/isError`,
  ADD_TO_CONTACTS: `contacts/addToContacts`,
  DELETE_FROM_CONTACTS: `contacts/deleteFromContacts`,
  EDIT_CONTACT: `contacts/editContact`,
  IS_EDIT_CONTACT: `contacts/isEditContact`,
  SEACRCH_CONTACT: `contacts/searchContact`,
  IS_SEACRCH: `contacts/isSearch`,
  ALL_CONTACTS_NOT_EDITING: `contacts/allContactsNotEditing`,
  IS_CONTACT_FORM: `data/isContactForm`
};

export const changeAuthorizationInfo = createAction(ActionType.CHANGE_AUTHORIZATION_INFO, (info) => {
  return {
    payload: info
  };
});

export const requiredAuthorization = createAction(ActionType.REQUIRED_AUTHORIZATION, (status) => {
  return {
    payload: status
  };
});

export const redirectToRoute = createAction(ActionType.REDIRECT_TO_ROUTE, (url) => {
  return {
    payload: url
  };
});

export const changeErrorStatus = createAction(ActionType.IS_ERROR, (error) => {
  return {
    payload: error
  };
});


export const addToContacts = createAction(ActionType.ADD_TO_CONTACTS, (contact) => {
  return {
    payload: contact
  };
});

export const deleteFromContacts = createAction(ActionType.DELETE_FROM_CONTACTS, (contact) => {
  return {
    payload: contact
  };
});

export const editContact = createAction(ActionType.EDIT_CONTACT, (contact) => {
  return {
    payload: contact
  };
});

export const openContactsEditor = createAction(ActionType.IS_EDIT_CONTACT, (status) => {
  return {
    payload: status
  };
});

export const findContact = createAction(ActionType.SEACRCH_CONTACT, (name) => {
  return {
    payload: name
  };
});

export const switchSearch = createAction(ActionType.IS_SEACRCH, (status) => {
  return {
    payload: status
  };
});

export const switchEditing = createAction(ActionType.ALL_CONTACTS_NOT_EDITING, (contacts) => {
  return {
    payload: contacts
  };
});

export const openContactForm = createAction(ActionType.IS_CONTACT_FORM, (status) => {
  return {
    payload: status
  };
});
