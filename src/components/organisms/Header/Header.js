import React from 'react';
import { Link } from 'gatsby';
import {
	motion,
	useViewportScroll,
	useTransform,
	useSpring
} from 'framer-motion';
import clsx from 'clsx';
import { useMeasure, useWindowSize, useMedia } from 'react-use';

import { Links } from 'src/components/molecules';

import style from './header.module.css';

const MotionLink = motion.custom(Link);

export function Header({ location }) {
	// const isWork = location.pathname.includes('work');

	const [firstRef, { height: firstHeight }] = useMeasure();
	const [surnameRef, { height: surnameHeight }] = useMeasure();
	const { height } = useWindowSize();

	const { scrollYProgress } = useViewportScroll();

	const firstY = useTransform(
		scrollYProgress,
		[0, 1],
		[0, height - firstHeight - 64]
	);
	const surnameY = useTransform(
		scrollYProgress,
		[0, 1],
		[0, height - surnameHeight - 64]
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

	const media = useMedia('(min-width: 768px)');

	return (
		<header className={clsx(style.header)}>
			<Links location={location}></Links>
			<motion.h1
				className={clsx(style.title)}
				transition={{
					type: 'spring',
					damping: 20,
					mass: 1,
					stiffness: 20
				}}
			>
				{media ? (
					<>
						<MotionLink
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
					</>
				) : (
					<>
						<Link to="/" className={style.link}>
							Dan Proudfoot
						</Link>
					</>
				)}
			</motion.h1>
		</header>
	);
}
