import React from 'react';
import clsx from 'clsx';
import { Link } from 'gatsby';
import {
	motion,
	useViewportScroll,
	useTransform,
	AnimatePresence
} from 'framer-motion';

import Github from 'src/media/images/github.svg';
import Email from 'src/media/images/at-sign.svg';
import Twitter from 'src/media/images/twitter.svg';
import Home from 'src/media/images/home.svg';

import style from './links.module.css';
import { useLocation } from 'src/hooks';

const variants = {
	group: {
		initial: {},
		enter: {}
	},
	home: {
		hide: {
			opacity: 0,
			transition: { delay: 0.75 }
		},
		show: {
			opacity: 1,
			transition: { delay: 1 }
		}
	}
};

export function Links() {
	const { pathname } = useLocation();
	const isHome = pathname === '/';

	const { scrollY } = useViewportScroll();
	const boxOpacity = useTransform(scrollY, [0, 50], [0, 1]);

	return (
		<>
			<motion.div className={style.links} style={{ opacity: boxOpacity }}>
				<ExternalLink to="https://twitter.com/DanProudfeet">
					<Twitter className={style.icon}></Twitter>
				</ExternalLink>
				<ExternalLink to="https://github.com/DanProudfoot">
					<Github className={style.icon}></Github>
				</ExternalLink>
				<ExternalLink to="mailto:dan@danproudfoot.co.uk">
					<Email className={style.icon}></Email>
				</ExternalLink>
			</motion.div>

			<AnimatePresence>
				{!isHome && (
					<motion.div
						className={style.homeLink}
						initial="hide"
						animate="show"
						exit="hide"
						variants={variants.home}
					>
						<Link to="/" className={clsx(style.link)}>
							<Home className={style.icon}></Home>
						</Link>
					</motion.div>
				)}
			</AnimatePresence>
		</>
	);
}

function ExternalLink({ to, children, className, ...props }) {
	return (
		<motion.a
			className={clsx(style.link, style.external, className)}
			href={to}
			variants={{
				hover: {},
				tap: {}
			}}
			whileHover="hover"
			whileTap="tap"
			target="_blank"
			rel="noopener noreferrer"
			{...props}
		>
			{children}
		</motion.a>
	);
}
