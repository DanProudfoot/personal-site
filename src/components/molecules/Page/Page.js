import React from 'react';
import clsx from 'clsx';
import { AnimatePresence, motion } from 'framer-motion';

import { BackgroundBlock } from 'src/components/organisms';
import { Links } from 'src/components/molecules';
import { useLocation, useTheme } from 'src/hooks';

import style from './page.module.css';

export function Page({ children }) {
	const theme = useTheme();
	const { pathname, key } = useLocation();
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
			<Links></Links>
			<AnimatePresence exitBeforeEnter>{children}</AnimatePresence>
			<BackgroundBlock></BackgroundBlock>

			<AnimatePresence>
				<motion.div
					key={key}
					className={style.outerWipe}
					initial={{
						x: isHome ? '-110%' : '110%'
					}}
					exit={{
						x: isHome ? '110%' : '-110%'
					}}
					transition={{ duration: 2 }}
				>
					<div className={style.wipe}></div>
				</motion.div>
			</AnimatePresence>
		</div>
	);
}
