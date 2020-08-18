import React from 'react';
import { motion, useViewportScroll, useTransform } from 'framer-motion';
import clsx from 'clsx';
import { Link } from 'gatsby';

import Github from 'src/media/images/github.svg';
import Email from 'src/media/images/at-sign.svg';
import Twitter from 'src/media/images/twitter.svg';

import style from './links.module.css';

export function Links() {
	const { scrollY } = useViewportScroll();
	const backgroundTransform = useTransform(
		scrollY,
		[0, 300],
		['rgba(0, 0, 0, 0)', 'rgba(0, 0, 0, 0.5)']
	);

	return (
		<motion.div
			className={style.group}
			style={{
				backgroundColor: backgroundTransform
			}}
		>
			<ExternalLink to="https://twitter.com/DanProudfeet">
				<Twitter className={style.icon}></Twitter>
			</ExternalLink>
			<ExternalLink to="https://github.com/DanProudfoot">
				<Github className={style.icon}></Github>
			</ExternalLink>
			<ExternalLink to="mailto:dan@danproudfoot.co.uk">
				<Email className={style.icon}></Email>
			</ExternalLink>
		</motion.div>
	);
}

const MotionLink = motion.custom(Link);

function LinkLink({ children, className, ...props }) {
	return (
		<MotionLink
			className={clsx(style.link, style.regular, className)}
			variants={{
				hover: {},
				tap: {}
			}}
			whileHover="hover"
			whileTap="tap"
			{...props}
		>
			{children}
		</MotionLink>
	);
}

function ExternalLink({ to, children, className, ...props }) {
	return (
		<motion.a
			className={clsx(style.link, style.external, className)}
			href={to}
			variants={{
				hover: {},
				tap: {}
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

// function HashLink({ to, children, className, ...props }) {
// 	return (
// 		<motion.a
// 			className={clsx(style.link, style.padTop, className)}
// 			href={to}
// 			variants={{
// 				hover: {},
// 				tap: {}
// 			}}
// 			whileHover="hover"
// 			whileTap="tap"
// 			{...props}
// 		>
// 			{children}
// 		</motion.a>
// 	);
// }
