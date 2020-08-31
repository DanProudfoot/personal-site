import React from 'react';
import { motion, useViewportScroll, useTransform } from 'framer-motion';
import clsx from 'clsx';

import Github from 'src/media/images/github.svg';
import Email from 'src/media/images/at-sign.svg';
import Twitter from 'src/media/images/twitter.svg';

import style from './links.module.css';

const variants = {
	initial: {
		scale: 1.5,
		// x: '50%',
		// y: '50%',
		filter: 'blur(20px)'
	},
	enter: {
		scale: 1,
		// x: '0%',
		// y: '0%',
		filter: 'blur(0px)',
		transition: {
			delay: 1,
			duration: 2.5
		}
	}
};

export function Links() {
	const { scrollY } = useViewportScroll();
	const backgroundTransform = useTransform(
		scrollY,
		[0, 300],
		['rgba(255,255,255, 0)', 'rgba(255,255,255, 0.3)']
	);

	return (
		<div className={style.links}>
			<motion.div
				className={style.group}
				variants={variants}
				initial="initial"
				animate="enter"
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
		</div>
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
