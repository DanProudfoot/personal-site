import React from 'react';
import { motion, useViewportScroll, useTransform } from 'framer-motion';
import clsx from 'clsx';
import { Link } from 'gatsby';

import { useCSSVariable } from '../../hooks';

import Github from '../../images/github.svg';
import Email from '../../images/at-sign.svg';
import Twitter from '../../images/twitter.svg';

import style from './links.module.css';

export default function Links() {
	const mainColor = useCSSVariable('--color-theme');

	const { scrollY } = useViewportScroll();
	const backgroundTransform = useTransform(
		scrollY,
		[0, 300],
		['rgba(0, 0, 0, 0)', 'rgba(0, 0, 0, 0.5)']
	);
	const colorTransform = useTransform(
		scrollY,
		[0, 60],
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
			<ExternalLink to="mailto:dan@danproudfoot.co.uk">
				<Email className={style.icon}></Email>
			</ExternalLink>

			<LinkLink to="/">Top</LinkLink>
			<LinkLink to="/work">Work</LinkLink>
		</motion.div>
	);
}

const MotionLink = motion.custom(Link);

function LinkLink({ children, className, ...props }) {
	return (
		<MotionLink
			className={clsx(style.link, style.padTop, className)}
			variants={{
				hover: { boxShadow: 'inset 0px 4px 8px rgba(0, 0, 0, 0.25)' },
				tap: { boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.35)' }
			}}
			whileHover="hover"
			whileTap="tap"
			{...props}
		>
			{children}
		</MotionLink>
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
