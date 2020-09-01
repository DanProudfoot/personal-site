import React from 'react';
import { Link } from 'gatsby';
import clsx from 'clsx';
import { motion } from 'framer-motion';

import style from './header.module.css';
// import { useLocation } from 'src/hooks';

const variants = {
	initial: {
		// 	scale: 1.5,
		// 	x: '50%',
		// 	y: '50%',
		// 	filter: 'blur(20px)'
	},
	enter: {
		// scale: 1,
		// x: '0%',
		// y: '0%',
		// filter: 'blur(0px)',
		// transition: {
		// 	delay: 1,
		// 	duration: 2.5
		// }
	}
};

export function Header() {
	// const { pathname } = useLocation();
	// const isHome = pathname === '/';

	return (
		<header className={clsx(style.header, style.vertical)}>
			<motion.h1
				variants={variants}
				initial="initial"
				animate="enter"
				className={clsx(style.title)}
			>
				<Link to="/" className={style.link}>
					Dan Proudfoot
				</Link>
			</motion.h1>
		</header>
	);
}
