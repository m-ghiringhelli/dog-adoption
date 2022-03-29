import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import DogForm from '../../components/DogForm/DogForm';
import { addDog } from '../../services/dogs';

export default function Admin() {
  const [dog, setDog] = useState({ name: '', bio: '', breed: '', age: null, image: '' });
  const [error, setError] = useState('');

  const history = useHistory();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const resp = await addDog(dog);
      history.push('../');
      console.log('history');
    } catch (e) {
      setError('trouble adding your dog');
    }
  };

  return (
    <div>
      <DogForm {...{ dog, setDog, handleSubmit }} />
    </div>
  );
}
