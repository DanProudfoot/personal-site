import { useContext, useEffect } from 'react';

import { BackgroundContext } from '../contexts/index';

export function useBackground({ update }) {
	const [background, setBackground] = useContext(BackgroundContext);

	useEffect(() => {
		setBackground(update);
	}, [setBackground, update]);

	return background;
}
