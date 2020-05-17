import React from 'react';
import { Link } from 'gatsby';
import Image from 'gatsby-image';
import { motion } from 'framer-motion';

import Box from '../Box/Box';

import style from './postlink.module.css';
import BackgroundImage from '../BackgroundImage/BackgroundImage';

const variants = {
	box: {
		initial: {
			scale: 1
		},
		hover: {
			scale: 1.05
		}
	},
	tag: {
		hover: {
			// fontSize: 28,
			transition: {
				duration: 0.2
			}
		}
	},
	img: {
		initial: {
			scale: 1.1
		},
		hover: {
			scale: 1
		}
	}
};

export default function PostLink({ post, index }) {
	return (
		<Link
			className={style.link}
			to={post.frontmatter.path}
			style={{
				gridColumnStart: index % 4 === 2 ? 2 : ''
			}}
		>
			<Box
				className={style.box}
				padding="24"
				whileHover="hover"
				variants={variants.box}
				layoutId={`box-${post.id}`}
				type="none"
				fill
			>
				<motion.div
					layoutId={`title-${post.id}`}
					variants={variants.tag}
					className={style.nametag}
				>
					{post.frontmatter.title}
				</motion.div>

				<BackgroundImage
					imageProps={{
						fluid:
							post.frontmatter.featuredImage.childImageSharp.fluid
					}}
					variants={variants.img}
					initial="initial"
					layoutId={`image-${post.id}`}
				></BackgroundImage>
			</Box>
		</Link>
	);
}
