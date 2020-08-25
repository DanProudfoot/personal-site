import React from 'react';
import { Link } from 'gatsby';
import { motion } from 'framer-motion';

import { BackgroundImage } from '../index';

import style from './postlink.module.css';

const variants = {
	box: {
		initial: {}
	},
	tag: {
		initial: {
			color: '#7e56f2'
		},
		hover: {
			// scale: 1.1
			color: '#000'
		}
	},
	img: {
		initial: {
			// opacity: 0
		},
		hover: {
			// opacity: 1,
			transition: {
				duration: 0.5
			}
		}
	}
};

export function PostLink({ post, index }) {
	return (
		<motion.div
			className={style.holder}
			variants={variants.box}
			initial="initial"
			whileHover="hover"
		>
			<Link
				className={style.link}
				to={post.frontmatter.path}
				style={{
					gridColumnStart: index % 4 === 2 ? 2 : ''
				}}
			>
				<motion.div
					// layoutId={`title-${post.id}`}
					variants={variants.tag}
					className={style.nametag}
				>
					{post.frontmatter.title}
				</motion.div>
			</Link>
		</motion.div>
	);
}
