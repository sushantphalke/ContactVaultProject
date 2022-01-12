import React, { Fragment, useContext } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { ContactItem } from './ContactItem';
import ContactContext from '../../context/contact/contactContext';
const Contacts = () => {
    const contactContext = useContext(ContactContext);
    const { contacts, filtered } = contactContext;

    if (contacts.length === 0) {
        return (
            <p style={{ color: 'red' }}>
                You dont have any Contact Plaese add contact to show
            </p>
        );
    }
    return (
        <div>
            <Fragment>
                <TransitionGroup>
                    {filtered !== null
                        ? filtered.map((contact) => (
                              <CSSTransition
                                  className='item'
                                  key={contact.id}
                                  timeout={500}
                              >
                                  <ContactItem contact={contact} />
                              </CSSTransition>
                          ))
                        : contacts.map((contact) => (
                              <CSSTransition
                                  className='item'
                                  key={contact.id}
                                  timeout={500}
                              >
                                  <ContactItem contact={contact} />
                              </CSSTransition>
                          ))}
                </TransitionGroup>
            </Fragment>
        </div>
    );
};

export default Contacts;
