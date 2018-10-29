import axios from 'axios';

export async function getRecommendations(query) {
  return await axios.get(`http://localhost:3000/recommendations/${query}`);
}
