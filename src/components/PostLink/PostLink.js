import React, { useRef, useLayoutEffect } from 'react';
import { Link } from 'gatsby';
import Image from 'gatsby-image';
import { motion, useMotionValue, useTransform, useSpring } from 'framer-motion';
import { useMouseHovered, useMeasure } from 'react-use';

import Box from '../Box/Box';

import style from './postlink.module.css';

export default function PostLink({ post, index }) {
	console.log(post);
	return (
		<Link
			className={style.link}
			to={post.frontmatter.path}
			style={{
				gridColumnStart: index % 4 === 2 ? 2 : ''
			}}
		>
			<Box className={style.box} whileHover={{ scale: 1.05 }}>
				{post.frontmatter.title}

				<Image
					fluid={post.frontmatter.featuredImage.childImageSharp.fluid}
				></Image>
			</Box>
		</Link>
	);
}
