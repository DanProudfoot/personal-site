import React from 'react';
import { motion, useViewportScroll, useTransform } from 'framer-motion';
import clsx from 'clsx';

import { useCSSVariable } from '../../hooks';

import Github from '../../images/github.svg';
import Twitter from '../../images/twitter.svg';

import style from './links.module.css';

export default function Links() {
	const mainColor = useCSSVariable('--color-main');

	const { scrollY } = useViewportScroll();
	const backgroundTransform = useTransform(
		scrollY,
		[0, 200],
		['rgba(0, 0, 0, 0)', 'rgba(0, 0, 0, 0.5)']
	);
	const colorTransform = useTransform(
		scrollY,
		[0, 350],
		[mainColor, 'rgba(255, 255, 255, 1)']
	);

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

			<HashLink to="#">Top</HashLink>
			<HashLink to="#work">Work</HashLink>
			<HashLink to="#contact">Contact</HashLink>
		</motion.div>
	);
}

function HashLink({ to, children, className, ...props }) {
	return (
		<motion.a
			className={clsx(style.link, style.padTop, className)}
			href={to}
			variants={{
				hover: { boxShadow: 'inset 0px 4px 8px rgba(0, 0, 0, 0.25)' },
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
	// const mainColor = useCSSVariable('--color-main');

	return (
		<motion.a
			className={clsx(style.link, style.padAll, className)}
			href={to}
			variants={{
				hover: {
					boxShadow: 'inset 0px 4px 8px rgba(0, 0, 0, 0.25)'
					// backgroundColor: mainColor
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
