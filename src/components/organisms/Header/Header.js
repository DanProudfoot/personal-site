import React from 'react';
import { Link } from 'gatsby';
import clsx from 'clsx';
import { motion } from 'framer-motion';

import style from './header.module.css';
// import { useLocation } from 'src/hooks';

export function Header() {
	// const { pathname } = useLocation();
	// const isHome = pathname === '/';

	return (
		<header className={clsx(style.header, style.vertical)}>
			<motion.h1 className={clsx(style.title)}>
				<Link to="/" className={style.link}>
					Dan Proudfoot
				</Link>
			</motion.h1>
		</header>
	);
}
