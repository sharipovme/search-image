import axios from "axios";
const BASE = import.meta.env.VITE_BASE_URL;
const KEY = import.meta.env.VITE_UNSPLASH_KEY;
const COUNT = 30;

export const getImagesAPI = (search) => {
  return axios.get(
    `${BASE}/search/photos/?client_id=${KEY}&per_page=${COUNT}&query=${search}`
  );
};
