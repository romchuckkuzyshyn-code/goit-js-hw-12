import axios from 'axios';

const API_KEY = '54643656-39fbeee4a4754ff685e869119';
const BASE_URL = 'https://pixabay.com/api';

axios.defaults.baseURL = BASE_URL;

export async function getImagesByQuery(query = '', page) {
  const response = await axios.get('/', {
    params: {
      key: API_KEY,
      q: query,
      image_type: 'photo',
      orientation: 'horizontal',
      safesearch: true,
      page,
      per_page: 15,
    },
  });
  return response.data;
}
