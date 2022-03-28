import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';

export default function Header() {
  return (
    <header className='header'>
      <ul>
        <li>
          <NavLink exact to='/'>
            Home
          </NavLink>
        </li>
      </ul>
    </header>
  );
}
