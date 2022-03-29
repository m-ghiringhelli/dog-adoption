import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import DogForm from '../../components/DogForm/DogForm';
import { addDog } from '../../services/dogs';

export default function Admin() {
  const [dog, setDog] = useState({ name: '', bio: '', breed: '', age: null, image: '' });
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');

  const history = useHistory();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await addDog(dog);
      setSuccess(true);
      setTimeout(() => {
        history.push('../');
      }, 1000);
    } catch (e) {
      setError('trouble adding your dog');
    }
  };

  return (
    <div>
      {(success) && <p>successfully added your dog!</p>}
      <DogForm {...{ dog, setDog, handleSubmit }} />
    </div>
  );
}
