import { ThemeContext } from '../contexts/index';
import { useContext, useEffect } from 'react';

export function useCSSVariable(variable = '--color-main', key) {
	return getComputedStyle(document.documentElement)
		.getPropertyValue(variable)
		.trim();
}

export function useTheme(update) {
	const { theme, setTheme } = useContext(ThemeContext);

	useEffect(() => {
		setTheme(update);
	}, [update, setTheme]);

	return theme;
}
