import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { signInUser, signUpUser } from '../../services/users';
import './Auth.css';
import '../../components/DogForm/DogForm.css';

export default function Auth({ setCurrentUser }) {
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
    } catch (e) {
      setError(e);
    }
    setCurrentUser(email);
    history.push('/');
  };

  const handleClick = (button) => {
    authType !== button && setAuthType(button);
  };

  return (
    <div className='auth'>
      <span className={authType === 'sign-in' && 'selected'} onClick={() => handleClick('sign-in')}>sign-in</span>
      <span className={authType === 'sign-up' && 'selected'} onClick={() => handleClick('sign-up')}>sign-up</span>
      <form className='dogForm' onSubmit={handleSubmit}>
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
