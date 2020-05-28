import { useState, useLayoutEffect } from 'react';

export function useCSSVariable(variable = '--color-main') {
	const getVar = () =>
		getComputedStyle(document.documentElement)
			.getPropertyValue(variable)
			.trim();

	const [state, setState] = useState(getVar());

	useLayoutEffect(() => {
		const val = getVar();

		setState(val);

		console.log('test');
	});

	return state;
}
