import './Header.css';
import React, {useState} from 'react';
import {Link} from 'react-router-dom';

function Header() {
  return (
    <>
      <nav className="container navbar">
      <Link to={'/'}>
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
          <path d="M18.3477 7.98007L10.3334 15.9944L18.3477 24.0087L20.3334 22.023L14.3047 15.9944L20.3334 9.96575L18.3477 7.98007Z" fill="#292929"/>
        </svg>
      </Link>

      <h3 className='navbar-header'>Регистрация</h3>
      </nav>
    </>
  );
}

export default Header;
