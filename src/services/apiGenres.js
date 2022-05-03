import axios from "axios";

const genresUrl = process.env.REACT_APP_GENRES;
const apiKey = process.env.REACT_APP_API_KEY;

const apiGenres = axios.create({
    baseURL: genresUrl + apiKey
})

export default apiGenres;