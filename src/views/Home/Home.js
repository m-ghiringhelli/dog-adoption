import React, { useEffect, useState } from 'react';
import { fetchDogs } from '../../services/dogs';
import DogCard from '../../components/DogCard/DogCard';

export default function Home() {
  const [dogs, setDogs] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const request = await fetchDogs();
        setDogs(request);
      } catch (e) {
        setError('trouble loading dogs');
      }
    };
    fetchData();
  }, []);

  return (
    <div>
      {dogs.map((dog) => (
        <DogCard key={dog.id} name={dog.name} breed={dog.breed} age={dog.age} image={dog.image} />
      ))}
    </div>
  );
}
