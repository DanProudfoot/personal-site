import React from 'react';
import clsx from 'clsx';

import { useLocation, useTheme } from 'src/hooks';

import style from './page.module.css';

export function Page({ children }) {
	const theme = useTheme();
	const { pathname } = useLocation();
	const isHome = pathname === '/';

	console.log(theme);

	return (
		<div
			className={clsx(style.page, { [style.notHome]: !isHome })}
			style={{
				'--theme-primary': theme.primary,
				'--theme-secondary': theme.secondary,
				'--theme-links': theme.links
			}}
		>
			{children}
		</div>
	);
}
