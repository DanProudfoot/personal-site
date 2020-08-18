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

import style from './header.module.css';

const MotionLink = motion.custom(Link);

export function Header({ location }) {
	const isWork = location.pathname.includes('work');

	const media = useMedia('(min-width: 768px)');
	const [firstRef, { height: firstHeight }] = useMeasure();
	const [surnameRef, { height: surnameHeight }] = useMeasure();
	const { height } = useWindowSize();

	const { scrollY, scrollYProgress } = useViewportScroll();

	const firstY = useTransform(
		scrollYProgress,
		[0, 1],
		[0, height + firstHeight]
	);
	const surnameY = useTransform(scrollY, (value) => value);

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
			<h1 className={clsx(style.title, { [style.workMode]: isWork })}>
				{media ? (
					<>
						<MotionLink
							ref={firstRef}
							to="/"
							className={style.link}
							// style={{ y: firstSpring }}
						>
							Dan
						</MotionLink>
						<MotionLink
							to="/"
							className={style.link}
							ref={surnameRef}
							// style={{ y: surnameSpring }}
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
			</h1>
		</header>
	);
}
