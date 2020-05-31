import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { motion } from 'framer-motion';

import style from './layout.module.css';
import '../../styles/main.css';
import { useTheme } from '../../hooks';

export default function Layout({ children, mainClassName, location }) {
	const theme = useTheme();

	return (
		<motion.div
			key={location.key}
			className={style.layoutContainer}
			exit={{ position: 'absolute', zIndex: 10, opacity: 0 }}
		>
			<style>
				{`:root {
					--color-theme: var(${theme})
				}`}
			</style>
			<div className={style.layout}>
				<main className={clsx(style.main, mainClassName)}>
					{children}
				</main>
			</div>
		</motion.div>
	);
}

export function Grid({
	children,
	columns,
	rows,
	style: cssStyles,
	className,
	...props
}) {
	return (
		<div
			className={clsx(style.grid, className)}
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
	area = '',
	className,
	style: cssStyles,
	...props
}) {
	return (
		<div
			style={{
				gridArea: area,
				...cssStyles
			}}
			className={clsx(style.gridArea, className)}
			{...props}
		>
			{children}
		</div>
	);
}

Layout.propTypes = {
	children: PropTypes.node.isRequired
};
