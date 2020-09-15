import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import clsx from 'clsx';

import { BackgroundImage } from 'src/components/atoms';
import { useBackground } from 'src/hooks';

import style from './background-block.module.css';

export function BackgroundBlock() {
	const background = useBackground();

	return (
		<div className={style.backgroundContainer}>
			<AnimatePresence>
				<motion.div key={background.value} className={style.background}>
					<InnerElement background={background}></InnerElement>
				</motion.div>
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
				></BackgroundImage>
			);

		case 'color':
			return (
				<div
					className={style.color}
					style={{ backgroundColor: background.value }}
				></div>
			);

		case 'component':
			return <background.value></background.value>;

		default:
			return null;
	}
}
