import axios from "axios";

const baseUrl = process.env.REACT_APP_BASE_URL;
const apiKey = process.env.REACT_APP_API_KEY;

const apiMovie = axios.create({
    baseURL: baseUrl + apiKey
})

export default apiMovie;