import React from 'react';
import { Link } from 'gatsby';
import { motion } from 'framer-motion';

import style from './postlink.module.css';

const variants = {
	box: {
		initial: {
			boxShadow: `8px 8px 0px rgba(0, 0, 0, 0.3)`
		},
		hover: {
			boxShadow: `16px 16px 0px rgba(0, 0, 0, 0.3)`
		},
		tap: {
			boxShadow: `0px 0px 0px rgba(0, 0, 0, 0.3)`,
			x: 8,
			y: 8
		}
	},
	tag: {
		initial: {},
		hover: {}
	},
	img: {
		initial: {},
		hover: {}
	}
};

export function PostLink({ post, index }) {
	return (
		<motion.div
			className={style.holder}
			variants={variants.box}
			initial="initial"
			whileHover="hover"
			whileTap="tap"
		>
			<Link
				className={style.link}
				to={post.frontmatter.path}
				style={{
					gridColumnStart: index % 4 === 2 ? 2 : ''
				}}
			>
				<div className={style.nametag}>{post.frontmatter.title}</div>
			</Link>
		</motion.div>
	);
}
