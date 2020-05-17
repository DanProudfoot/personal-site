import React from 'react';
import Image from 'gatsby-image';
import { motion } from 'framer-motion';

import style from './background.module.css';

export default function BackgroundImage({ imageProps, ...props }) {
	return (
		<motion.div className={style.bgi} {...props}>
			<Image {...imageProps}></Image>
		</motion.div>
	);
}
