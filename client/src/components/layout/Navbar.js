import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function Navbar({ title }) {
    return (
        <>
            <div className='navbar'>
                <h1>{title}</h1>
                <ul className='navbar-ul'>
                    <li>Home</li>
                    <li>About</li>
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
