import React, { useState } from 'react';

import { ThemeContext } from '../contexts/index';

export default function Providers({ children }) {
	const [theme, setTheme] = useState('--color-main');

	return (
		<ThemeContext.Provider value={{ theme, setTheme }}>
			{children}
		</ThemeContext.Provider>
	);
}
