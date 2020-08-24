import React from 'react';

import { useTheme } from 'src/hooks/useTheme';

import style from './page.module.css';

export function Page({ children }) {
	const theme = useTheme();

	return (
		<div
			className={style.page}
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
