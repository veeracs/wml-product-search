import axios from 'axios';

export async function getItems(query) {
  return await axios.get(`http://localhost:3000/search/${query}`);
}
