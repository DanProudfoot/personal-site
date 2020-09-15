import React from 'react';
import { motion } from 'framer-motion';

import { PostLink, Heading } from 'src/components/atoms';

import style from './posts.module.css';

export function Posts({ pages }) {
	return (
		<div className={style.group}>
			<div className={style.headingContainer}>
				<Heading>Things I’ve built!</Heading>
			</div>

			<div className={style.posts}>
				{pages.edges.map((edge, i) => (
					<PostLink key={edge.node.id} post={edge.node} index={i} />
				))}
			</div>
		</div>
	);
}
