import React from 'react';
import { motion } from 'framer-motion';

import { useLocation } from 'src/hooks';

const variants = {
	initial: {
		opacity: 0
	},
	enter: {
		opacity: 1,
		transition: {
			duration: 0.2
		}
	},
	exit: {
		opacity: 0,
		transition: {
			duration: 0,
			delay: 1
		}
	}
};

export function Transition({ children }) {
	return (
		<motion.div
			initial="initial"
			animate="enter"
			exit="exit"
			variants={variants}
		>
			{children}
		</motion.div>
	);
}
