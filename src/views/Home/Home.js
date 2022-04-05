import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { fetchDogs } from '../../services/dogs';
import DogCard from '../../components/DogCard/DogCard';
import './Home.css';

export default function Home() {
  const [dogs, setDogs] = useState([]);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(true);

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
    setTimeout(() => {setLoading(false);}, 1000);
    
  }, [dogs]);

  if (loading) return <div>loading...</div>;

  return (
    <div className='dogList'>
      {(error) && <p>{error}</p>}
      {dogs.map((dog) => (
        <Link key={dog.id} to={`/dogs/${dog.id}`}>
          <DogCard name={dog.name} breed={dog.breed} age={dog.age} image={dog.image} />
        </Link>
      ))}
    </div>
  );
}
