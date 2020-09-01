import React from 'react';
import Image from 'gatsby-image';
import { motion } from 'framer-motion';
import clsx from 'clsx';

import style from './background.module.css';

const variants = {
	initial: {
		scale: 1.5,
		opacity: 0
	},
	enter: {
		scale: 1.2,
		opacity: 1
	},
	exit: {
		scale: 1,
		opacity: 1
	}
};

export function BackgroundImage({ imageProps, className, ...props }) {
	return (
		<motion.div
			className={clsx(style.bgi, className)}
			initial="initial"
			animate="enter"
			exit="exit"
			variants={variants}
			{...props}
		>
			<Image {...imageProps}></Image>
		</motion.div>
	);
}
