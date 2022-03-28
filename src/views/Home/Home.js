import React from 'react';
import { fetchDogs } from '../../services/dogs';

export default function Home() {
  const dogs = fetchDogs();
  console.log(dogs);
  return (
    <div>Home</div>
  );
}
