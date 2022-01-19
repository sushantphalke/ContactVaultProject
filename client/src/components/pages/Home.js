import React, { useContext, useEffect } from 'react';
import ContactForm from '../contacts/ContactForm';
import Contacts from '../contacts/Contacts';
import ContactFilter from '../contacts/contactFilter';
import AuthContext from '../../context/auth/authContext';
import { FaSignOutAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import ContactContext from '../../context/contact/contactContext';

const Home = () => {
    const authContext = useContext(AuthContext);
    const contactContext = useContext(ContactContext);
    const { logout } = authContext;
    const { clearContacts } = contactContext;
    
// 
    const onLogout = () => {
        logout();
        clearContacts();
    };

    useEffect(() => {
        authContext.loadUser();
        // eslint-disable-next-line
    }, []);

    return (
        <div className='grid-2'>
            <div>
                <ContactForm />
            </div>

            <div>
                <Link onClick={onLogout} to='/login'>
                    <FaSignOutAlt /> <span className='hide-sm'>Logout</span>{' '}
                </Link>
                <ContactFilter />
                <Contacts />
            </div>
        </div>
    );
};
export default Home;
