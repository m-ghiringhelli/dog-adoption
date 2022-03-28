import React, { useState } from 'react';
import DogForm from '../../components/DogForm/DogForm';

export default function Admin() {
  const [dog, setDog] = useState({});
  return (
    <div>
      <DogForm {...{ dog, setDog }} />
    </div>
  );
}
