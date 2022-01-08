import React from 'react';
import styles from '../css/ImageList.module.css';

const ImagesList = (props) => {
	const images = props.images.map(({ images, id, title }) => {
		return (
			<img
				className={`${styles.imagePadding}`}
				alt={title}
				key={id}
				src={images.fixed_height.url}
			/>
		);
	});

	return <div>{images}</div>;
};

export default ImagesList;
