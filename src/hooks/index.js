import { ThemeContext } from '../contexts/index';
import { useContext, useEffect } from 'react';

export function useCSSVariable(variable = '--color-main') {
	if (typeof window !== 'undefined') {
		return getComputedStyle(document.documentElement)
			.getPropertyValue(variable)
			.trim();
	}

	return '#000';
}

export function useTheme(update) {
	const { theme, setTheme } = useContext(ThemeContext);

	useEffect(() => {
		setTheme(update);
	}, [update, setTheme]);

	return theme;
}
