import React, { useEffect } from 'react';
import { Link } from 'gatsby';
import { motion, useViewportScroll, useTransform } from 'framer-motion';
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

	return (
		<header
			className={clsx(
				'fixed h-screen w-screen top-0 pointer-events-none'
			)}
		>
			<motion.h1
				animate
				className={clsx(style.h1, {
					'right-0': !isWork,
					'left-0': isWork
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
						delay: 0.5
					}}
					to="/"
					className="block"
				>
					<motion.div ref={firstRef} style={{ y: firstY }}>
						Dan
					</motion.div>
				</MotionLink>
				<MotionLink
					initial={{ x: isWork ? '-100%' : '0%' }}
					animate={{ x: isWork ? '-100%' : '0%' }}
					transition={{
						type: 'spring',
						damping: 14,
						mass: 1,
						stiffness: 120,
						delay: 0.5
					}}
					to="/"
					className="block"
				>
					<motion.div ref={surnameRef} style={{ y: surnameY }}>
						Proudfoot
					</motion.div>
				</MotionLink>
			</motion.h1>
		</header>
	);
}
