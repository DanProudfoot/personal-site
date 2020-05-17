import React from 'react';

import PostLink from '../PostLink/PostLink';

import style from './posts.module.css';
import Box from '../Box/Box';

export default function Posts({ pages }) {
	const Posts = pages.edges
		.filter((edge) => !!edge.node.frontmatter.date) // You can filter your posts based on some criteria
		.map((edge, i) => (
			<PostLink key={edge.node.id} post={edge.node} index={i} />
		));

	return (
		<div className={style.group}>
			<div className={style.headingContainer}>
				<h2 className={style.heading}>Oberserve! Things I’ve built!</h2>
			</div>

			{Posts}
		</div>
	);
}
