import axios from 'axios';

export async function getProduct(query) {
  return await axios.get(`http://localhost:3000/product/${query}`);
}
