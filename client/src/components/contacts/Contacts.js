import React, { Fragment, useContext, useEffect } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { ContactItem } from './ContactItem';
import ContactContext from '../../context/contact/contactContext';
import { LoadingSpinner } from '../layout/loadingSpinner';
const Contacts = () => {
    const contactContext = useContext(ContactContext);
    const { contacts, filtered, getContacts, loading } = contactContext;

    useEffect(() => {
        getContacts();
        // eslint-disable-next-line
    }, []);

    if (contacts !== null && contacts.length === 0 && !loading) {
        return (
            <h4 style={{ color: 'red' }}>
                You dont have any Contact Cards, please add to show
            </h4>
        );
    }
    return (
        <div>
            <Fragment>
                {contacts !== null && !loading ? (
                    <TransitionGroup>
                        {filtered !== null
                            ? filtered.map((contact) => (
                                  <CSSTransition
                                      className='item'
                                      key={contact._id}
                                      timeout={50}
                                  >
                                      <ContactItem contact={contact} />
                                  </CSSTransition>
                              ))
                            : contacts.map((contact) => (
                                  <CSSTransition
                                      className='item'
                                      key={contact._id}
                                      timeout={50}
                                  >
                                      <ContactItem contact={contact} />
                                  </CSSTransition>
                              ))}
                    </TransitionGroup>
                ) : (
                    <LoadingSpinner />
                )}
            </Fragment>
        </div>
    );
};

export default Contacts;
