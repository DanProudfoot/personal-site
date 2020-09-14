import React from 'react';
import clsx from 'clsx';
import { AnimatePresence, motion } from 'framer-motion';

import { useLocation, useTheme } from 'src/hooks';

import style from './page.module.css';
import 'src/styles/main.css';

export function Page({ children, location }) {
	const theme = useTheme();
	const { pathname } = useLocation();
	const isHome = pathname === '/';

	return (
		<div
			className={clsx(style.page, { [style.notHome]: !isHome })}
			style={{
				'--theme-primary': theme.primary,
				'--theme-highlight': theme.highlight,
				'--theme-secondary': theme.secondary,
				'--theme-links': theme.links
			}}
		>
			{children}

			<AnimatePresence>
				<motion.div
					key={location.key}
					className={style.wipe}
					initial={{
						x: isHome ? '-150vw' : '150vw'
					}}
					exit={{
						x: isHome ? '150vw' : '-150vw'
					}}
					transition={{ duration: 2 }}
				></motion.div>
			</AnimatePresence>
		</div>
	);
}
