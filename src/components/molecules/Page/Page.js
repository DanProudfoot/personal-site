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
					className={style.outerWipe}
					initial={{
						x: isHome ? '-100%' : '100%'
					}}
					exit={{
						x: isHome ? '100%' : '-100%'
					}}
					transition={{ duration: 2 }}
				>
					<div className={style.wipe}></div>
				</motion.div>
			</AnimatePresence>
		</div>
	);
}
