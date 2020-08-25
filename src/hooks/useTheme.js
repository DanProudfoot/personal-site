import { useEffect, useContext } from 'react';

import { ThemeContext } from '../contexts/index';

const themes = {
	default: {
		primary: 'var(--color-main)',
		secondary: 'var(--color-secondary)',
		links: 'var(--color-main)'
	},
	dark: {
		primary: '255, 255, 255',
		secondary: '0, 0, 0',
		links: '255, 255, 255'
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
