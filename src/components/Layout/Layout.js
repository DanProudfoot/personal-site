import React from 'react';
import PropTypes from 'prop-types';
import { useStaticQuery, graphql } from 'gatsby';
import { motion } from 'framer-motion';
import { Location } from '@reach/router';

import '../../styles/main.css';

export default function Layout({ children }) {
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
		<motion.div exit="page_exit">
			<main>{children}</main>
		</motion.div>
	);
}

Layout.propTypes = {
	children: PropTypes.node.isRequired
};
