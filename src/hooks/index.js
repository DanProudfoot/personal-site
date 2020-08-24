import { LocationContext } from '../contexts/index';
import { useContext } from 'react';

export function useCSSVariable(variable = '--color-main', key) {
	return getComputedStyle(document.documentElement)
		.getPropertyValue(variable)
		.trim();
}

export function useLocation() {
	return useContext(LocationContext);
}

export * from './useTheme';
