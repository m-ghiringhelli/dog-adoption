import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import { logout } from '../../services/users';
import './Header.css';

export default function Header({ currentUser, setCurrentUser }) {
  const handleLogout = async () => {
    await logout();
    setCurrentUser(null);
  };

  return (
    <header className='header'>
      <h1 className='headerName'>adopt-a-dog</h1>
      <ul className='nav'>
        <li>
          <NavLink exact to='/'>
            VIEW THE DOGS
          </NavLink>
        </li>
        {
          currentUser &&
          <li>
            <NavLink to='/admin'>
              ADD A DOG
            </NavLink>
          </li>
        }
        {
          !currentUser &&
          <li>
            <NavLink to='/auth'>
              SIGN-IN
            </NavLink>
          </li>
        }
        {
          currentUser &&
          <li className='link' onClick={handleLogout}>
            <Link to='/'>
              LOGOUT
            </Link>
          </li>
        }
      </ul>
    </header>
  );
}
