import React from 'react';
import {
	motion,
	useViewportScroll,
	useTransform,
	useMotionTemplate,
	AnimatePresence
} from 'framer-motion';
import clsx from 'clsx';

import { BackgroundImage } from 'src/components/atoms';
import { useBackground, useTheme } from 'src/hooks';

import style from './background-block.module.css';

export function BackgroundBlock() {
	const background = useBackground();
	const theme = useTheme();

	const { scrollY } = useViewportScroll();
	const blurTransform = useTransform(scrollY, [0, 200], [0, 5]);
	const blur = useMotionTemplate`blur(${blurTransform}px)`;

	return (
		<div className={style.backgroundContainer}>
			<motion.div
				className={clsx(style.bgOverlay, style[theme.name])}
				style={{
					backdropFilter: blur
				}}
			></motion.div>
			<AnimatePresence>
				<InnerElement
					key={background.value}
					background={background}
				></InnerElement>
			</AnimatePresence>
		</div>
	);
}

function InnerElement({ background }) {
	switch (background.type) {
		case 'image':
			return (
				<BackgroundImage
					imageProps={{
						fluid: background.value.childImageSharp.fluid,
						className: style.image
					}}
					className={style.background}
				></BackgroundImage>
			);

		default:
			return null;
	}
}
