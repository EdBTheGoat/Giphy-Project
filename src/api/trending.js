import axios from 'axios';
const TRENDING_KEY = process.env.REACT_APP_GIPHY_API_KEY;

export default axios.create({
	baseURL: `https://api.giphy.com/v1/gifs/trending?api_key=${TRENDING_KEY}&limit=25`,
});
