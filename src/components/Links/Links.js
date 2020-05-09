import React, { useMemo } from 'react';
import { motion } from 'framer-motion';
import clsx from 'clsx';

import Github from '../../images/github.svg';
import Twitter from '../../images/twitter.svg';

import style from './links.module.css';

export default function Links() {
	return (
		<div className={style.group}>
			<ExternalLink to="https://twitter.com/DanProudfeet">
				<Twitter className={style.icon}></Twitter>
			</ExternalLink>
			<ExternalLink to="https://github.com/DanProudfoot">
				<Github className={style.icon}></Github>
			</ExternalLink>

			<HashLink to="#top">Top</HashLink>
			<HashLink to="#work">Work</HashLink>
			<HashLink to="#contact">Contact</HashLink>
		</div>
	);
}

function HashLink({ to, children, className, ...props }) {
	return (
		<motion.a
			className={clsx(style.link, style.padTop, className)}
			href={to}
			variants={{
				hover: { boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.25)' },
				tap: { boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.35)' }
			}}
			whileHover="hover"
			whileTap="tap"
			{...props}
		>
			{children}
		</motion.a>
	);
}

function ExternalLink({ to, children, className, ...props }) {
	const mainColor = useMemo(() => {
		return getComputedStyle(document.documentElement)
			.getPropertyValue('--color-main')
			.trim();
	}, []);

	return (
		<motion.a
			className={clsx(style.link, style.padAll, className)}
			href={to}
			variants={{
				hover: {
					boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.25)',
					backgroundColor: mainColor,
					color: '#fff'
				},
				tap: { boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.35)' }
			}}
			whileHover="hover"
			whileTap="tap"
			target="_blank"
			rel="noopener noreferrer"
			{...props}
		>
			{children}
		</motion.a>
	);
}
