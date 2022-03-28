import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchDogById } from '../../services/dogs';

export default function DogDetail() {
  const id = useParams().id;
  const [dog, setDog] = useState();
  
  useEffect(() => {
    fetchDogById(id).then(({ data }) => setDog(data));
  }, [id]);

  return (
    <div>
      <h1>Dog name</h1>
      <img />
      <p>Dog bio</p>
    </div>
  );
}
