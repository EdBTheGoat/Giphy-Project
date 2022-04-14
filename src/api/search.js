import axios from 'axios';
const SEARCH_KEY = process.env.REACT_APP_GIPHY_API_KEY;
console.log(SEARCH_KEY);

export default axios.create({
	baseURL: `https://api.giphy.com/v1/gifs/search?api_key=${SEARCH_KEY}&limit=25`,
});
