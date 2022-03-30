import React, { useEffect, useState } from 'react';
import { useParams, useHistory, Link } from 'react-router-dom';
import { fetchDogById, removeDog } from '../../services/dogs';
import './DogDetail.css';

export default function DogDetail() {
  const id = useParams().id;
  const [loading, setLoading] = useState(true);
  const [dog, setDog] = useState();

  const history = useHistory();

  function handleDelete() {
    removeDog(id);
    history.push('../');
  }
  
  useEffect(() => {
    fetchDogById(id).then((data) => setDog(data));
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, [id]);

  if (loading) return <div>loading...</div>;

  return (
    <div className='dogDetail'>
      <h1>{dog.name}</h1>
      <img src={dog.image}/>
      <p>{dog.bio}</p>
      <Link to={`/dogs/${id}/edit`}>
        <div>Edit dog</div>
      </Link>
      <button onClick={handleDelete}>Delete</button>
    </div>
  );
}
