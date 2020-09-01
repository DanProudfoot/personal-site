import { useContext, useEffect } from 'react';

import { BackgroundContext } from '../contexts/index';

//Types
// {
// 	type: 'image',
// 	value: childImageSharp...
// }

// {
// 	type: 'video',
// 	value: cloudinary public-id
// }

// {
// 	type: 'component',
// 	value: Component
// }

// {
// 	type: null
// }

export function useBackground(update) {
	const { background, setBackground } = useContext(BackgroundContext);

	useEffect(() => {
		if (update && update.value !== background.value) {
			setBackground(update);
		}
	}, [background.value, setBackground, update]);

	return background;
}
