import { checkError, client } from './client.js';

export async function fetchDogs() {
  const request = await client.from('dogs').select('*');
  return checkError(request);
}

export async function fetchDogById(id) {
  const request = await client.from('dogs').select('*').match({ id }).single();
  return checkError(request);
}