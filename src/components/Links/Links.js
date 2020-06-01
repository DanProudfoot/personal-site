import React from 'react';
import { motion, useViewportScroll, useTransform } from 'framer-motion';
import clsx from 'clsx';
import { Link } from 'gatsby';

import { useCSSVariable, useTheme } from '../../hooks';

import Github from '../../images/github.svg';
import Email from '../../images/at-sign.svg';
import Twitter from '../../images/twitter.svg';

import style from './links.module.css';

export default function Links() {
	const theme = useTheme();
	const mainColor = useCSSVariable(theme);

	const { scrollY } = useViewportScroll();
	const backgroundTransform = useTransform(
		scrollY,
		[0, 300],
		['rgba(0, 0, 0, 0)', 'rgba(0, 0, 0, 0.5)']
	);

	const colorTransform = useTransform(scrollY, [0, 60], [mainColor, '#fff']);

	return (
		<motion.div
			className={style.group}
			style={{
				backgroundColor: backgroundTransform,
				color: colorTransform
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

			<LinkLink to="/">Home</LinkLink>
			{/* <LinkLink to="/work">Work</LinkLink> */}
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
