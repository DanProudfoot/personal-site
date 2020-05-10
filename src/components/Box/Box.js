import React from 'react';
import clsx from 'clsx';

import { motion } from 'framer-motion';

import style from './box.module.css';

export default function Box({ children, className, padding = '32', ...props }) {
	return (
		<motion.div
			className={clsx(style.box, className, style[`padding_${padding}`])}
			{...props}
		>
			{children}
		</motion.div>
	);
}
