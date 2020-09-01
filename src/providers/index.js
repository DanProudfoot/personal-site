import React, { useState } from 'react';
import { CloudinaryContext } from 'cloudinary-react';

import { ThemeContext, LocationContext, BackgroundContext } from '../contexts';

export default function Providers({ children, location }) {
	const [theme, setTheme] = useState('default');
	const [background, setBackground] = useState({
		type: 'none',
		value: undefined
	});

	return (
		<CloudinaryContext
			cloudName={process.env.GATSBY_CLOUDINARY_CLOUD_NAME}
			apiKey={process.env.GATSBY_CLOUDINARY_API_KEY}
			apiSecret={process.env.GATSBY_CLOUDINARY_API_SECRET}
		>
			<ThemeContext.Provider value={{ theme, setTheme }}>
				<LocationContext.Provider value={location}>
					<BackgroundContext.Provider
						value={{ background, setBackground }}
					>
						{children}
					</BackgroundContext.Provider>
				</LocationContext.Provider>
			</ThemeContext.Provider>
		</CloudinaryContext>
	);
}
