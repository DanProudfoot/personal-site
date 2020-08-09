import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

import { motion } from 'framer-motion';

import style from './box.module.css';

export function Box({
	children,
	className,
	padding = '32',
	theme = 'primary',
	fill,
	...props
}) {
	return (
		<motion.div
			className={clsx(
				style.box,
				style[`padding_${padding}`],
				style[`type_${theme}`],
				{ [style.fill]: fill },
				className
			)}
			{...props}
		>
			{children}
		</motion.div>
	);
}

Box.propTypes = {
	children: PropTypes.node.isRequired,
	className: PropTypes.string,
	padding: PropTypes.oneOf(['32', '24']),
	theme: PropTypes.oneOf(['primary', 'secondary', 'none', 'blur']),
	fill: PropTypes.bool
};
