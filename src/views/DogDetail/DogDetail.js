import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchDogById, removeDog } from '../../services/dogs';

export default function DogDetail() {
  const id = useParams().id;
  const [loading, setLoading] = useState(true);
  const [dog, setDog] = useState();
  
  useEffect(() => {
    fetchDogById(id).then((data) => setDog(data));
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, [id]);

  if (loading) return <div>loading...</div>;

  return (
    <div>
      <h1>{dog.name}</h1>
      <img src={dog.image}/>
      <p>{dog.bio}</p>
      <button onClick={removeDog(id)}>Delete</button>
    </div>
  );
}
