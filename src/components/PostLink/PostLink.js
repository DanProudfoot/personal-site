import React, { useRef, useLayoutEffect } from 'react';
import { Link } from 'gatsby';
import { motion, useMotionValue, useTransform, useSpring } from 'framer-motion';
import { useMouseHovered, useMeasure } from 'react-use';
// import clsx from 'clsx';

import style from './postlink.module.css';

export default function PostLink({ post }) {
	const button = useRef();

	const [ref, { width, height }] = useMeasure();
	const { elX, elY } = useMouseHovered(button, {
		bound: true,
		whenHovered: true
	});

	const halfWidth = width / 2;
	const halfHeight = height / 2;

	const motionX = useMotionValue(0);
	const motionY = useMotionValue(0);

	const transformX = useTransform(
		motionX,
		[-halfWidth, halfWidth],
		['-15deg', '15deg']
	);
	const transformScale = useTransform(
		motionX,
		[-halfWidth, 0, halfWidth],
		[1.3, 1.1, 1.3]
	);
	const transformY = useTransform(
		motionY,
		[-halfHeight, halfHeight],
		[`3deg`, `-3deg`]
	);

	const springY = useSpring(transformY);
	const springX = useSpring(transformX);
	const springScale = useSpring(transformScale);

	useLayoutEffect(() => {
		motionX.set(elX - halfWidth);
		motionY.set(elY - halfHeight);
	}, [elX, elY, halfWidth, halfHeight, motionX, motionY]);

	// useLayoutEffect(() => {
	// 	transformX.onChange((value) => console.log(value));
	// }, []);

	return (
		<Link
			ref={ref}
			className={style.link}
			to={post.frontmatter.path}
			style={{ perspective: 1000 }}
		>
			<motion.div
				className={style.button}
				ref={button}
				style={{
					rotateY: springX,
					rotateX: springY,
					scale: springScale
				}}
				whileTap={{ scale: 1 }}
			>
				{post.frontmatter.title}
			</motion.div>
		</Link>
	);
}
