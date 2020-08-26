import { useEffect, useContext } from 'react';

import { ThemeContext } from '../contexts/index';

const themes = {
	default: {
		primary: 'var(--color-1)',
		highlight: 'var(--color-1)',
		secondary: 'var(--color-2)',
		links: 'var(--color-1)'
	},
	dark: {
		primary: 'var(--color-white)',
		highlight: 'var(--color-1)',
		secondary: 'var(--color-black)',
		links: 'var(--color-1)'
	}
};

export function useTheme(update) {
	const { theme, setTheme } = useContext(ThemeContext);

	useEffect(() => {
		if (update) {
			setTheme(update);
		}
	}, [update, setTheme]);

	return themes[theme];
}
