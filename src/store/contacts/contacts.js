import {createReducer} from '@reduxjs/toolkit';
import {addToContacts, deleteFromContacts, editContact, openContactsEditor, findContact, switchEditing, switchSearch} from '../actions';

const initialState = {
  contacts: [],
  searchContact: [],
  isSearch: false,
};

const contactAdd = (item, contacts) => {
  const contact = {
    id: contacts.length + 1,
    name: item.name,
    phoneNumber: item.phoneNumber,
    editing: false
  };

  return [...contacts, contact];
};

const contactEditStatus = (id, contacts) => {
  const contact = contacts.filter((element) => element.id === id)[0];
  contact.editing = true;
  return contacts;
};

const contactEdit = (item, contacts) => {
  const contact = contacts.filter((element) => element.id === item.id)[0];
  contact.name = item.name;
  contact.phoneNumber = item.phoneNumber;
  contact.editing = false;
  return contacts;
};

const contactDelete = (id, contacts) => {
  const index = contacts.findIndex((element) => element.id === id);

  if (index > -1) {
    return [...contacts.slice(0, index), ...contacts.slice(index + 1)];
  }

  return contacts;
};

const contacsNotEditing = (contacts) => {
  contacts.forEach((contact) => {
    contact.editing = false;
  });

  return contacts;
};

const searchSelectedContacts = (name, contacts, isSearch) => {
  if (isSearch) {
    return contacts.filter((element) => element.name === name);
  }

  return contacts;
};

const contacts = createReducer(initialState, (builder) => {
  builder
    .addCase(addToContacts, (state, action) => {
      state.contacts = contactAdd(action.payload, state.contacts);
    })
    .addCase(openContactsEditor, (state, action) => {
      state.contacts = contactEditStatus(action.payload, state.contacts);
    })
    .addCase(editContact, (state, action) => {
      state.contacts = contactEdit(action.payload, state.contacts);
    })
    .addCase(deleteFromContacts, (state, action) => {
      state.contacts = contactDelete(action.payload, state.contacts);
    })
    .addCase(switchEditing, (state) => {
      state.contacts = contacsNotEditing(state.contacts);
    });

  builder.addCase(switchSearch, (state, action) => {
    state.isSearch = action.payload;
  });

  builder.addCase(findContact, (state, action) => {
    state.searchContact = searchSelectedContacts(action.payload, state.contacts, state.isSearch);
  });
});

export {contacts};
