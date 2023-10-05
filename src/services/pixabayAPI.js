import axios from 'axios';

const BASE_URL = 'https://pixabay.com/api/';
const API_KEY = '38650102-d85801c337edddd96f74bbd65';

const imagesPerPage = 12;

export async function getImagesBySearchQuery(query, currentPage) {
  try {
    const response = await axios.get(
      `${BASE_URL}?key=${API_KEY}&q=${query}&page=${currentPage}&per_page=${imagesPerPage}&image_type=photo&orientation=horizontal`
    );

    if (currentPage <= Math.ceil(response.data.totalHits / imagesPerPage)) {
      return response.data;
    }
  } catch (error) {
    console.error(error);
  }
}