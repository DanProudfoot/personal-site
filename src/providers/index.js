import React from 'react';

import { LocationContext } from '../contexts/index';

export default function Providers({ children, location }) {
	return (
		<LocationContext.Provider value={location}>
			{children}
		</LocationContext.Provider>
	);
}
