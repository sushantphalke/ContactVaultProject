import React from 'react';
import { PropTypes } from 'react';
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div className='navbar bg-primary'>
      <h1>
        <i className={icon}/>{title}
      </h1>
      <ul>
        <li>
          <Link to = '/'>Home</Link>
        </li>
        <li>
          <Link to = '/about'>About</Link>
        </li>
      </ul>
      
    </div>
  );
}
