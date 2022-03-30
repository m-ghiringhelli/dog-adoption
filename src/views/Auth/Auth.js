import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { signInUser, signUpUser } from '../../services/users';
import './Auth.css';

export default function Auth() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [authType, setAuthType] = useState('sign-in');
  const [error, setError] = useState('');

  const history = useHistory();
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      authType === 'sign-in' ?
        await signInUser(email, password) :
        await signUpUser(email, password);
      history.push('/');
    } catch (e) {
      setError(e);
    }
  };

  const handleClick = (button) => {
    authType !== button && setAuthType(button);
  };

  return (
    <div>
      <span className={authType === 'sign-in' && 'selected'} onClick={() => handleClick('sign-in')}>sign-in</span>
      <span className={authType === 'sign-up' && 'selected'} onClick={() => handleClick('sign-up')}>sign-up</span>
      <form onSubmit={handleSubmit}>
        <label>
          email:
          <input type='email' value={email} onChange={(e) => setEmail(e.target.value)}></input>
        </label>
        <label>
          password:
          <input type='password' value={password} onChange={(e) => setPassword(e.target.value)}></input>
        </label>
        <button>submit</button>
      </form>
    </div>
  );
}
