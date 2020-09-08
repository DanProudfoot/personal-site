import React from 'react';
import { useMedia } from 'react-use';
import { motion } from 'framer-motion';

import style from './animated-text.module.css';

const variants = {
	initial: (custom) => ({
		opacity: 0
	}),
	enter: {
		opacity: 1,
		transition: {
			duration: 0.2
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

	const formFactorText = matches ? textDesktop : textMobile;

	return (
		<motion.div
			className={style.container}
			initial="initial"
			animate="enter"
			variants={{ enter: { transition: { staggerChildren: 0.5 } } }}
		>
			{formFactorText.map((line, i) => (
				<motion.div key={line + i} variants={variants}>
					<div
						className={style.line}
						style={{
							animationDelay: `${i}s`
						}}
					>
						{line}
					</div>
				</motion.div>
			))}
		</motion.div>
	);
}
