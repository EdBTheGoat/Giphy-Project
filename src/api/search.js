import axios from 'axios';

export default axios.create({
	baseURL: 'https://api.giphy.com/v1/gifs/search?api_key=wi6R97bUDMiAQjBUFDi4aYIvRat4TYS4&limit=25',
});
