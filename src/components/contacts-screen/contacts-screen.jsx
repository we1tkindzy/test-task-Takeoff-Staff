import React, {useRef, useCallback} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {addToContacts, deleteFromContacts, openContactForm, openContactsEditor, editContact, findContact, switchSearch} from '../../store/actions';
import {ContactFormStatus, NumberPattern} from '../../const';
import LoginInfo from '../login-info/login-info';
import './style.scss';

const ContactsScreen = () => {
  const {contacts, searchContact, isSearch} = useSelector((state) => state.CONTACTS);
  const {contactForm} = useSelector((state) => state.DATA);

  const dispatch = useDispatch();

  const nameRef = useRef();
  const phoneNumberRef = useRef();

  const editedNameRef = useRef();
  const editedPhoneNumberRef = useRef();

  const searchRef = useRef();

  let selectedСontacts = isSearch ? searchContact : contacts;

  const addContact = useCallback((evt) => {
    evt.preventDefault();

    dispatch(addToContacts({
      name: nameRef.current.value,
      phoneNumber: phoneNumberRef.current.value,
    }, contacts));

    nameRef.current.value = ``;
    phoneNumberRef.current.value = ``;
    dispatch(openContactForm(ContactFormStatus.CLOSE));
  }, [dispatch]);

  const deletContact = useCallback((evt) => {
    evt.preventDefault();

    const id = parseInt(evt.target.dataset.id, 10);

    dispatch(deleteFromContacts(id, contacts));
  });

  const openEditor = useCallback((evt) => {
    evt.preventDefault();
    const id = parseInt(evt.target.dataset.id, 10);
    dispatch(openContactsEditor(id));
  });

  const editContactInfo = useCallback((evt) => {
    const id = parseInt(evt.target.dataset.id, 10);

    dispatch(editContact({
      id,
      name: editedNameRef.current.value,
      phoneNumber: editedPhoneNumberRef.current.value,
    }));
  });

  const addContacsForm = useCallback((evt) => {
    evt.preventDefault();

    dispatch(openContactForm(ContactFormStatus.OPEN));
  });

  const searchRightContact = useCallback((evt) => {
    evt.preventDefault();

    if (searchRef.current.value === ``) {
      dispatch(switchSearch(false));
    } else {
      dispatch(switchSearch(true));
    }

    dispatch(findContact(searchRef.current.value));
  });

  return (
    <div className="page">
      <main className="main">
        <section className="contacts page__wrapper">
          <LoginInfo />

          <h1 className="page__title page__title--contacts">Контакты</h1>

          <div className="contacts__search search">
            <input className="search__input" type="text" name="search" placeholder="Поиск по имени" id="search" ref={searchRef} />
            <label htmlFor="search" className="visually-hidden">Строка поиска</label>
            <button className="search__button button" type="button" onClick={searchRightContact}>
              <span className="visually-hidden">Поиск</span>
              <svg className="search__icon" width="16" height="16">
                <use xlinkHref="#search"/>
              </svg>
            </button>
            <button className="search__add-contact" onClick={addContacsForm} type="button">Добавить контакт</button>
          </div>

          {contactForm === `OPEN` &&
            <form className="contacts__form" onSubmit={addContact} action="" method="post">
              <label htmlFor="name" className="visually-hidden">Имя</label>
              <input className="page__input" type="text" id="name" name="name" ref={nameRef} placeholder="Имя" required="required" />

              <label htmlFor="phone-number" className="visually-hidden">Номер телефона</label>
              <input className="page__input" type="tel" id="phone-number" name="phone-number" ref={phoneNumberRef} pattern={NumberPattern} placeholder="Номер телефона в формате: 8xxxxxxxxxx" required="required" />

              <button className="page__submit" type="submit">Добавить</button>
            </form>
          }

          <ul className="contacts__list">
            {selectedСontacts.map((contact) => (
              <li className="contats__item contact" key={contact.id}>
                <svg className="contact__icon contact__icon--user" width="16" height="16">
                  <use xlinkHref="#user"/>
                </svg>

                {!contact.editing
                  ? <>
                    <div className="contact__wrapper">
                      <span className="contact__name">{contact.name}</span>
                      <a className="contact__phone" href={`tel:${contact.phoneNumber}`}>{contact.phoneNumber}</a>
                    </div>

                    <button className="contact__button-edit button" data-id={contact.id} onClick={openEditor} type="button">
                      <span className="visually-hidden">Редактировать контакт</span>
                      <svg className="contact__icon contact__icon--pen" width="16" height="16" data-id={contact.id} onClick={openEditor}>
                        <use data-id={contact.id} onClick={openEditor} xlinkHref="#pen"/>
                      </svg>
                    </button>
                  </>
                  : <form className="contact__form" data-id={contact.id} onSubmit={editContactInfo} action="" method="post">
                    <div className="contact__wrapper">
                      <label htmlFor={`name-${contact.id}`} className="visually-hidden">Имя</label>
                      <input type="text" id={`name-${contact.id}`} name={`name-${contact.id}`} ref={editedNameRef} placeholder="Имя" required="required" defaultValue={contact.name} />

                      <label htmlFor={`phone-number-${contact.id}`} className="visually-hidden">Номер телефона</label>
                      <input type="tel" id={`phone-number-${contact.id}`} name={`phone-number-${contact.id}`} ref={editedPhoneNumberRef} pattern={NumberPattern} required="required" defaultValue={contact.phoneNumber} />
                    </div>

                    <button className="contact__button-tick button" type="submit">
                      <span className="visually-hidden">Сохранить режактирование</span>
                      <svg className="contact__icon contact__icon--pen" width="28" height="28">
                        <use xlinkHref="#tick"/>
                      </svg>
                    </button>
                  </form>
                }

                <button className="contact__button-delet button" data-id={contact.id} onClick={deletContact} type="button">
                  <span className="visually-hidden">Удалить контак</span>
                  <svg className="contact__icon contact__icon--cross" width="16" height="16" data-id={contact.id} onClick={deletContact}>
                    <use data-id={contact.id} onClick={deletContact} xlinkHref="#cross"/>
                  </svg>
                </button>
              </li>
            ))}
          </ul>
        </section>


      </main>
    </div>
  );
};

export default ContactsScreen;
