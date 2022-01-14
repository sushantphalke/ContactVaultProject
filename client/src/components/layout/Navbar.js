import React, { Fragment, useContext } from 'react';
import PropTypes from 'prop-types';
import { FaHome, FaSignOutAlt } from 'react-icons/fa';
import { MdAssignmentInd } from 'react-icons/md';
import { Link } from 'react-router-dom';
import AuthContext from '../../context/auth/authContext';

function Navbar({ title }) {
    const authContext = useContext(AuthContext);
    const { isAuthenticated, logout, user } = authContext;

    const authLinks = (
        <Fragment>
            <li>Hello {user && user.name}</li>
            <li>
                <a href='#!'>
                    <FaSignOutAlt /> <span className='hide-sm'>Logout</span>{' '}
                </a>
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

                    <Link to='/About'>
                        <li className='navbar-btn'>About</li>
                    </Link>
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
