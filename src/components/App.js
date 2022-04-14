import React from 'react';
import styles from '../css/App.module.css';
import search from '../api/search';
import SearchBar from './SearchBar';
import ImagesList from './ImageList';
import trending from '../api/trending';

class App extends React.Component {
	state = { images: [] };

	async componentDidMount() {
		const response = await trending.get('');
		this.setState({ images: response.data.data });
	}

	onSearchSubmit = async (term) => {
		const response = await search.get('', {
			params: { q: term },
		});
		this.setState({ images: response.data.data });
	};

	render() {
		return (
			<div className={`${'ui container'} ${styles.mainDiv}`}>
				<SearchBar onSubmit={this.onSearchSubmit} />
				<ImagesList images={this.state.images} />
			</div>
		);
	}
}

export default App;
