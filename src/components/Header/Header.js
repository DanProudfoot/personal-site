import React, { useEffect } from 'react';
import { Link } from 'gatsby';
import { motion, useViewportScroll, useTransform } from 'framer-motion';
import clsx from 'clsx';

import style from './header.module.css';

const MotionLink = motion.custom(Link);

export default function Header({ location }) {
	const isWork = location.pathname.includes('work');

	const { scrollYProgress } = useViewportScroll();
	const y = useTransform(scrollYProgress, [0, 1], ['0vh', '100vh']);

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
					<motion.div style={{ y }}>Dan</motion.div>
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
					Proudfoot
				</MotionLink>
			</motion.h1>
		</header>
	);
}
