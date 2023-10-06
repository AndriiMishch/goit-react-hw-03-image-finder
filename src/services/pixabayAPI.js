import axios from 'axios';

const API_KEY = '38650102-d85801c337edddd96f74bbd65';
axios.defaults.baseURL = 'https://pixabay.com/api/';

export const getPixabayPictures = (searchQuery, page, perPage) => {
  return axios.get(
    `?q=${searchQuery}&page=${page}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=${perPage}`
  );
};