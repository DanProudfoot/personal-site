import React from 'react';
import {
	motion,
	useViewportScroll,
	useTransform,
	useMotionTemplate
} from 'framer-motion';

import { BackgroundImage } from 'src/components/atoms';

import style from './background-block.module.css';

export function BackgroundBlock({ image }) {
	const { scrollY } = useViewportScroll();
	const blurTransform = useTransform(scrollY, [0, 200], [0, 5]);
	const blur = useMotionTemplate`blur(${blurTransform}px)`;

	return (
		<div className={style.backgroundContainer}>
			<motion.div
				className={style.bgOverlay}
				style={{
					backdropFilter: blur
					// backgroundColor: color
				}}
			></motion.div>
			<BackgroundImage
				imageProps={{
					fluid: image.childImageSharp.fluid,
					className: style.image
				}}
				className={style.background}
			></BackgroundImage>
		</div>
	);
}
