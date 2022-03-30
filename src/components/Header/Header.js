import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';

export default function Header() {
  return (
    <header className='header'>
      <h1 className='headerName'>adopt-a-dog</h1>
      <ul className='nav'>
        <li>
          <NavLink exact to='/'>
            VIEW THE DOGS
          </NavLink>
        </li>
        <li>
          <NavLink to='/admin'>
            ADD A DOG
          </NavLink>
        </li>
        <li>
          <NavLink to='/auth'>
            SIGN-IN
          </NavLink>
        </li>
      </ul>
    </header>
  );
}
