import React from 'react';
import './DogForm.css';

export default function DogForm({ dog, setDog, handleSubmit }) {
  const updateDog = (attribute, value) => {
    const newDog = { ...dog, [attribute]: value };
    setDog(newDog);
  };
  return (
    <div>
      <h1>Add a Dog</h1>
      <form className='dogForm' onSubmit={handleSubmit}>
        <label>
          Name:
          <input type='text' value={dog.name} onChange={(e) => updateDog('name', e.target.value)} />
        </label>
        <label>
          Image url:
          <input type='text' value={dog.image} onChange={(e) => updateDog('image', e.target.value)} />
        </label>
        <label>
          Breed:
          <input type='text' value={dog.breed} onChange={(e) => updateDog('breed', e.target.value)} />
        </label>
        <label>
          Bio:
          <input type='text' value={dog.bio} onChange={(e) => updateDog('bio', e.target.value)} />
        </label>
        <label>
          Age:
          <input type='number' value={dog.age} onChange={(e) => updateDog('age', e.target.value)} />
        </label>
        <button>Save</button>
      </form>
    </div>
  );
}
