import React from 'react';
import PropTypes from 'prop-types';
import { FaHome } from 'react-icons/fa';
import {MdAssignmentInd } from 'react-icons/md';
import { Link } from 'react-router-dom';

function Navbar({ title }) {
    return (
        <>
            <div className='navbar'>
                <h2>
                    <MdAssignmentInd/>
                    {title}
                </h2>

                <ul className='navbar-ul'>
                    <Link to='/Home'>
                        <li className='navbar-btn'>
                            <FaHome />
                            Home
                        </li>
                    </Link>
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
