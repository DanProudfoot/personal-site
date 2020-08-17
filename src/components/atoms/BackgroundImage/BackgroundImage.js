import React from 'react';
import Image from 'gatsby-image';
import { motion } from 'framer-motion';
import clsx from 'clsx';

import style from './background.module.css';

export function BackgroundImage({ imageProps, className, ...props }) {
	return (
		<motion.div className={clsx(style.bgi, className)} {...props}>
			<Image {...imageProps}></Image>
		</motion.div>
	);
}
