import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { motion } from 'framer-motion';

import style from './layout.module.css';
import 'src/styles/main.css';

const variants = {
	initial: (custom) => ({
		// position: 'absolute',
		// top: window.scrollY,
		opacity: 0
	}),
	enter: (custom) => ({
		opacity: 1
	}),
	exit: {
		opacity: 0,
		transition: {
			duration: 0.5
		}
	}
};

export function Layout({ children, mainClassName, location }) {
	return (
		<motion.div
			key={location.key}
			className={style.layoutContainer}
			initial="initial"
			animate="enter"
			exit="exit"
			variants={variants}
		>
			<main className={clsx(style.main, mainClassName)}>{children}</main>
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
