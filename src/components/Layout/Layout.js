import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { motion } from 'framer-motion';

import style from './layout.module.css';
import '../../styles/main.css';

const transition = {
	type: 'spring',
	damping: 20,
	mass: 1,
	stiffness: 20,
	delay: 0.1
};

const variants = {
	page_initial: (custom) => ({
		x: custom ? '100%' : '-100%'
	}),
	page_enter: {
		x: '0%',
		transition
	},
	page_exit: (custom) => ({
		x: custom ? '100%' : '-100%',
		position: 'absolute',
		transition
	})
};

export default function Layout({ children, location }) {
	const isWorkPage = location.pathname.includes('work');

	return (
		<div className={style.layoutContainer}>
			<motion.div
				key={location.pathname}
				initial="page_initial"
				animate="page_enter"
				exit="page_exit"
				custom={isWorkPage}
				variants={variants}
				className={style.layout}
			>
				<main className={clsx(style.main)}>{children}</main>
			</motion.div>
		</div>
	);
}

export function GridArea({
	children,
	colStart = 1,
	colEnd = 'span 1',
	rowStart = 1,
	rowEnd = 'span 1',
	className,
	style: cssStyles,
	anchor,
	...props
}) {
	return (
		<div
			style={{
				gridColumn: `${colStart} / ${colEnd}`,
				gridRow: `${rowStart} / ${rowEnd}`,
				...cssStyles
			}}
			className={clsx(style.gridArea, className)}
			{...props}
		>
			{anchor && <div id={anchor} className={style.anchor}></div>}
			{children}
		</div>
	);
}

Layout.propTypes = {
	children: PropTypes.node.isRequired
};
