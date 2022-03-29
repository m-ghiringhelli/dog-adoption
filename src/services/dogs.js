import { checkError, client } from './client.js';

export async function fetchDogs() {
  const request = await client.from('dogs').select('*');
  return checkError(request);
}

export async function fetchDogById(id) {
  const request = await client.from('dogs').select('*').match({ id }).single();
  return checkError(request);
}

export async function addDog(dog) {
  const request = await client.from('dogs').insert(dog);
  return checkError(request);
}

export async function removeDog(id) {
  const request = await client.from('dogs').delete().match({ id });
  return checkError(request);
}

export async function editDog(dog, id) {
  const request = await client.from('dogs').update(dog).match({ id });
  return checkError(request);
}