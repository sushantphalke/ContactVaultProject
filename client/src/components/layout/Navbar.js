import React, { Fragment, useContext } from 'react';
import PropTypes from 'prop-types';
import { FaHome, FaSignOutAlt } from 'react-icons/fa';
import { MdAssignmentInd } from 'react-icons/md';
import { Link } from 'react-router-dom';
import AuthContext from '../../context/auth/authContext';
import ContactContext from '../../context/contact/contactContext';

function Navbar({ title }) {
    const authContext = useContext(AuthContext);
    const contactContext = useContext(ContactContext);
    const { isAuthenticated, logout, user } = authContext;
    const { clearContacts } = contactContext;
    const onLogout = () => {
        logout();
        clearContacts();
    };

    const authLinks = (
        <Fragment>
            <li>Hello {user && user.name}</li>
            <li>
                <Link onClick={onLogout} to='/Login'>
                    <FaSignOutAlt /> <span className='hide-sm'>Logout</span>
                </Link>
            </li>
        </Fragment>
    );

    const guestLinks = (
        <Fragment>
            <Link to='/Register'>
                <li className='navbar-btn'>Register</li>
            </Link>
            <Link to='/login'>
                <li className='navbar-btn'>Login</li>
            </Link>
            <Link to='/About'>
                <li className='navbar-btn'>About</li>
            </Link>
        </Fragment>
    );

    return (
        <>
            <div className='navbar'>
                <h2>
                    <MdAssignmentInd />
                    {title}
                </h2>

                <ul className='navbar-ul'>
                    {isAuthenticated ? authLinks : guestLinks}
                </ul>
            </div>
        </>
    );
}
Navbar.propTypes = { title: PropTypes.string };
Navbar.defaultProps = {
    home: 'Home',
    about: 'About',
};
export default Navbar;
