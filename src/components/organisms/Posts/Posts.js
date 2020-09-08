import React from 'react';
import { motion } from 'framer-motion';

import { PostLink } from 'src/components/atoms';

import style from './posts.module.css';

const variants = {
	heading: {
		initial: {
			y: '-50%',
			opacity: 0
		},
		enter: {
			y: '0%',
			opacity: 1,
			textShadow: `6px 6px 0px rgba(0,0,0,0.1)`,

			transition: {
				delay: 0.4,
				y: {},
				opacity: {
					duration: 0.2
				},
				textShadow: {
					delay: 0.8
				}
			}
		}
	}
};

export function Posts({ pages }) {
	return (
		<div className={style.group}>
			<div className={style.headingContainer}>
				<h2 className={style.heading}>
					<motion.span
						variants={variants.heading}
						initial="initial"
						animate="enter"
					>
						Things I’ve built!
					</motion.span>
				</h2>
			</div>

			<div className={style.posts}>
				{pages.edges.map((edge, i) => (
					<PostLink key={edge.node.id} post={edge.node} index={i} />
				))}
			</div>
		</div>
	);
}
