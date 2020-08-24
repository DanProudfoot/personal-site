import { useEffect, useState } from 'react';

import { useLocation } from './index';

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

export function useTheme() {
	const { pathname } = useLocation();
	const [theme, setTheme] = useState(themes.default);

	useEffect(() => {
		if (pathname.includes('/work/')) {
			setTheme(themes.dark);
		} else {
			setTheme(themes.default);
		}
	}, [pathname]);

	return theme;
}
