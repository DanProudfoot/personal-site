import { useMemo } from 'react';

export function useCSSVariable(variable = '--color-main') {
	const mainColor = useMemo(() => {
		return getComputedStyle(document.documentElement)
			.getPropertyValue(variable)
			.trim();
	}, [variable]);

	return mainColor;
}
