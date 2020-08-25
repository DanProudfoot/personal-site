import React from 'react';
import clsx from 'clsx';
import { motion } from 'framer-motion';

import { useLocation } from 'src/hooks';

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
			delay: 1,
			duration: 2
		}
	}
};

export function Main({ children, className }) {
	const location = useLocation();

	return (
		<motion.main
			key={'main' + location.key}
			className={clsx(style.shared, style.main, className)}
			initial="initial"
			animate="enter"
			exit="exit"
			variants={variants}
		>
			{children}
		</motion.main>
	);
}

export function Section({ children, className }) {
	const location = useLocation();

	return (
		<motion.section
			key={'section' + location.key}
			className={clsx(style.shared, style.section, className)}
			initial="initial"
			animate="enter"
			exit="exit"
			variants={variants}
		>
			{children}
		</motion.section>
	);
}
