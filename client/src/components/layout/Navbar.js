import React from 'react';
import PropTypes from 'prop-types';
import {FaClipboardList,FaHome} from 'react-icons/fa';

function Navbar({ title }) {
    return (
        <>
            <div className='navbar'>
                <h2><FaClipboardList/>{title}</h2>
                <ul className='navbar-ul'>
                    <li className='navbar-btn'><FaHome/>Home</li>
                    <li className='navbar-btn'>About</li>
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
