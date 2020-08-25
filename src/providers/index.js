import React, { useState } from 'react';

import { ThemeContext, LocationContext } from '../contexts/index';

export default function Providers({ children, location }) {
	const [theme, setTheme] = useState('default');

	return (
		<ThemeContext.Provider value={{ theme, setTheme }}>
			<LocationContext.Provider value={location}>
				{children}
			</LocationContext.Provider>
		</ThemeContext.Provider>
	);
}
