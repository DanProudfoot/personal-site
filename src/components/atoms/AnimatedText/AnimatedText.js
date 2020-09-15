import React from 'react';
import { useMedia, useWindowSize } from 'react-use';
import { motion, useViewportScroll, useTransform } from 'framer-motion';

import style from './animated-text.module.css';

const variants = {
	initial: {
		filter: 'blur(10px)'
	},
	enter: {
		filter: 'blur(0px)',

		transition: {
			duration: 1
		}
	}
};

const textDesktop = [
	'Dan Proudfoot',
	'Dan Proudfoot',
	'Dan Proudfoot',
	'Dan Proudfoot',
	'Dan Proudfoot'
];
const textMobile = ['DA', 'NP', 'RO', 'UD', 'FO', 'OT'];

export function AnimatedText() {
	const matches = useMedia('(orientation: landscape)');
	const { scrollY } = useViewportScroll();

	const formFactorText = matches ? textDesktop : textMobile;

	return (
		<motion.div
			className={style.container}
			initial="initial"
			animate="enter"
			variants={{
				enter: {
					transition: { staggerChildren: 0.4, delayChildren: 0.5 }
				}
			}}
		>
			{formFactorText.map((line, i) => (
				<LineItem line={line} index={i} key={line + i}></LineItem>
			))}
		</motion.div>
	);
}

function LineItem({ line, index }) {
	const { height } = useWindowSize();
	const { scrollY } = useViewportScroll();

	const transformY = useTransform(
		scrollY,
		[0, height * 0.8],
		['0%', `${-100 * index}%`]
	);
	const transformOpacity = useTransform(scrollY, [0, height * 0.8], [1, 0]);

	return (
		<motion.div
			key={line + index}
			variants={variants}
			style={{
				y: transformY,
				opacity: transformOpacity
			}}
		>
			<div
				className={style.line}
				style={{
					animationDelay: `${index}s`
				}}
			>
				{line}
			</div>
		</motion.div>
	);
}
