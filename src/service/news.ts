import axios
 from "axios";
const API_KEY = '6438eb67f7e34e1fadbe83fa8a9d756b';
const url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${API_KEY}`

export const getAllNews = () => axios.get(url)