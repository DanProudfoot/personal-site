import React from 'react';
import { Link } from 'gatsby';
import {
	motion,
	useViewportScroll,
	useTransform,
	useSpring
} from 'framer-motion';
import clsx from 'clsx';
import { useMeasure, useWindowSize } from 'react-use';

import style from './header.module.css';

const MotionLink = motion.custom(Link);

export default function Header({ location }) {
	const isWork = location.pathname.includes('work');

	const [firstRef, { height: firstHeight }] = useMeasure();
	const [surnameRef, { height: surnameHeight }] = useMeasure();
	const { height } = useWindowSize();

	const { scrollYProgress } = useViewportScroll();

	const firstY = useTransform(
		scrollYProgress,
		[0, 1],
		[0, height - firstHeight - 72]
	);
	const surnameY = useTransform(
		scrollYProgress,
		[0, 1],
		[0, height - surnameHeight - 72]
	);

	const firstSpring = useSpring(firstY, {
		damping: 50,
		mass: 1,
		stiffness: 120
	});

	const surnameSpring = useSpring(surnameY, {
		damping: 50,
		mass: 1,
		stiffness: 120
	});

	return (
		<header className={clsx(style.header)}>
			<motion.h1
				animate
				className={clsx(style.h1, {
					[style.right]: !isWork,
					[style.left]: isWork
				})}
				transition={{
					type: 'spring',
					damping: 20,
					mass: 1,
					stiffness: 20
				}}
			>
				<MotionLink
					initial={{ x: isWork ? '100%' : '0%' }}
					animate={{ x: isWork ? '100%' : '0%' }}
					transition={{
						type: 'spring',
						damping: 14,
						mass: 1,
						stiffness: 120,
						delay: 0.3
					}}
					style={{ y: firstSpring }}
					ref={firstRef}
					to="/"
					className={style.link}
				>
					Dan
				</MotionLink>
				<MotionLink
					initial={{ x: isWork ? '-100%' : '0%' }}
					animate={{ x: isWork ? '-100%' : '0%' }}
					transition={{
						type: 'spring',
						damping: 14,
						mass: 1,
						stiffness: 120,
						delay: 0.3
					}}
					to="/"
					className={style.link}
					ref={surnameRef}
					style={{ y: surnameSpring }}
				>
					Proudfoot
				</MotionLink>
			</motion.h1>
		</header>
	);
}
