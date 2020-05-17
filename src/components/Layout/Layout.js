import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { motion } from 'framer-motion';

import style from './layout.module.css';
import '../../styles/main.css';

export default function Layout({ children, location }) {
	return (
		<motion.div
			key={location.key}
			className={style.layoutContainer}
			exit={{ position: 'absolute', zIndex: 10, opacity: 0 }}
		>
			<div className={style.layout}>
				<main className={clsx(style.main)}>{children}</main>
			</div>
		</motion.div>
	);
}

export function Grid({ children, columns, rows, style: cssStyles, ...props }) {
	return (
		<div
			className={clsx(style.grid)}
			style={{
				gridTemplateColumns: columns,
				gridTemplateRows: rows,
				...cssStyles
			}}
			{...props}
		>
			{children}
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
