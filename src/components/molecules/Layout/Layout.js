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
		// scale: 0.8,
		// filter: 'blur(10px)'
	}),
	enter: (custom) => ({
		opacity: 1
		// scale: 1,
		// filter: 'blur(0px)',
		// transition: {
		// 	duration: 2,
		// 	delay: 1
		// }
	}),
	exit: {
		opacity: 0
		// scale: 1.2,
		// filter: 'blur(20px)',
		// transition: {
		// 	duration: 2
		// }
	}
};

export function Layout({ children, className }) {
	const location = useLocation();

	return (
		<motion.main
			key={'main' + location.key}
			className={clsx(style.layout, className)}
			initial="initial"
			animate="enter"
			exit="exit"
			variants={variants}
		>
			<div className={style.layoutInner}>{children}</div>
		</motion.main>
	);
}

// export function Main({ children, className }) {
// 	return (
// 		<header className={clsx(style.shared, style.main, className)}>
// 			{children}
// 		</header>
// 	);
// }

export function Section({ children, className }) {
	return (
		<section className={clsx(style.shared, style.section, className)}>
			{children}
		</section>
	);
}
