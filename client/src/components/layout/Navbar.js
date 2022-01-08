import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Navbar = (props) => {
    return (
        <nav className='navbar'>
            <div className='navbar-content'>
                <i id='navbar-icon' className={props.icon} />
                <Link to='/'>
                    <div className='navbar-btn'>{props.home}</div>
                </Link>
                <Link to='/About'>
                    <div className='navbar-btn'>{props.about}</div>
                </Link>
            </div>
        </nav>
    );
};

Navbar.defaultProps = {
    home: 'Home',
    about: 'About',
    user: 'User',
    icon: 'fa fa-github',
};
Navbar.propTypes = {
    home: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired,
};

export default Navbar;
