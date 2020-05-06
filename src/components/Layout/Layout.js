import React from 'react';
import PropTypes from 'prop-types';
import { useStaticQuery, graphql } from 'gatsby';
import { motion } from 'framer-motion';

import '../../styles/main.css';

const transition = {
	type: 'spring',
	damping: 20,
	mass: 1,
	stiffness: 20,
	delay: 0.1
};

const variants = {
	page_initial: (custom) => ({
		x: custom ? '100%' : '-100%',
		transition
	}),
	page_enter: {
		x: '0%'
	},
	page_exit: (custom) => ({
		x: custom ? '100%' : '-100%',
		position: 'absolute',
		transition
	})
};

export default function Layout({ children, location }) {
	const data = useStaticQuery(graphql`
		query SiteTitleQuery {
			site {
				siteMetadata {
					title
				}
			}
		}
	`);

	return (
		<motion.div
			key={location.pathname}
			initial="page_initial"
			animate="page_enter"
			exit="page_exit"
			custom={location.pathname.includes('work')}
			variants={variants}
		>
			<main>{children}</main>
		</motion.div>
	);
}

Layout.propTypes = {
	children: PropTypes.node.isRequired
};
