import React from 'react';
import { motion } from 'framer-motion';
import { useIntersection } from 'react-use';
import clsx from 'clsx';

import style from './heading.module.css';

const variants = {
	initial: {
		y: '-50%',
		opacity: 0,
		textShadow: `0px 0px 0px rgba(0,0,0,0.1)`
	},
	appear: ({ delay }) => ({
		y: '0%',
		opacity: 1,
		textShadow: `0.15em 0.15em 0px rgba(0,0,0,0.1)`,
		transition: {
			delay: delay,
			textShadow: {
				delay: 0.8 + delay
			}
		}
	})
};

export function Heading({
	as = 'h2',
	delay = 0,
	children,
	disableAppear,
	className
}) {
	const Tag = as;

	const intersectionRef = React.useRef(null);
	const intersection = useIntersection(intersectionRef, {
		root: null,
		rootMargin: '-20% 0%',
		threshold: 1
	});

	return (
		<Tag className={clsx(style.heading, className)} ref={intersectionRef}>
			<motion.span
				variants={variants}
				initial="initial"
				animate={
					(disableAppear || intersection?.isIntersecting) && 'appear'
				}
				custom={{ delay }}
			>
				{children}
			</motion.span>
		</Tag>
	);
}
