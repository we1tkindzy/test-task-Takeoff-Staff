import {combineReducers} from 'redux';
import {user} from './user/user';
import {contacts} from './contacts/contacts';
import {data} from './data/data';

export const NameSpace = {
  USER: `USER`,
  CONTACTS: `CONTACTS`,
  DATA: `DATA`
};

export default combineReducers({
  [NameSpace.USER]: user,
  [NameSpace.CONTACTS]: contacts,
  [NameSpace.DATA]: data
});
