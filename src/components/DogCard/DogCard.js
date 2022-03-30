import React from 'react';
import './DogCard.css';

export default function DogCard({ name, breed, image, age }) {
  return (
    <div className='dogCard'>
      <h1>{name.toUpperCase()}</h1>
      <img src={image}/>
      <p>{name} is a {age} year old {breed}.</p>
    </div>
  );
}
