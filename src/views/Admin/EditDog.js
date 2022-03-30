import React, { useState, useEffect } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import DogForm from '../../components/DogForm/DogForm';
import { fetchDogById, editDog } from '../../services/dogs';
import './Admin.css';

export default function EditDog({ currentUser }) {
  const id = useParams().id;
  const [dog, setDog] = useState({ name: '', bio: '', breed: '', age: null, image: '' });
  const [loading, setLoading] = useState(true);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');
  
  const history = useHistory();

  useEffect(() => {
    fetchDogById(id).then((data) => setDog(data));
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await editDog(dog, id);
      setSuccess(true);
      setTimeout(() => {
        history.push(`/dogs/${id}`);
      }, 500);
    } catch (e) {
      setError('trouble adding your dog');
    }
  };
  
  !currentUser && history.push('/');

  if (loading) return <div>loading...</div>;

  return (
    <div className='formContainer'>
      {(error) && <p>{error}</p>}
      {(success) && <p>successfully edited your dog!</p>}
      <h1>Edit a Dog</h1>
      <DogForm {...{ dog, setDog, handleSubmit }} />
    </div>
  );
}
