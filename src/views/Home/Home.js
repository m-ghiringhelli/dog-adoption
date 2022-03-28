import React, { useEffect, useState } from 'react';
import { fetchDogs } from '../../services/dogs';

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
    <div>Home</div>
  );
}
