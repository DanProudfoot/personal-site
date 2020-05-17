import React from 'react';
import clsx from 'clsx';

import { motion } from 'framer-motion';

import style from './box.module.css';

export default function Box({
	children,
	className,
	padding = '32',
	type = 'primary',
	fill,
	...props
}) {
	return (
		<motion.div
			className={clsx(
				style.box,
				style[`padding_${padding}`],
				style[`type_${type}`],
				{ [style.fill]: fill },
				className
			)}
			{...props}
		>
			{children}
		</motion.div>
	);
}
