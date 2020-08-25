import React from 'react';

import { PostLink } from 'src/components/atoms';

import style from './posts.module.css';

export function Posts({ pages }) {
	return (
		<div className={style.group}>
			<div className={style.headingContainer}>
				<h2 className={style.heading}>Oberserve! Things I’ve built!</h2>
			</div>

			<div className={style.posts}>
				{pages.edges.map((edge, i) => (
					<PostLink key={edge.node.id} post={edge.node} index={i} />
				))}
			</div>
		</div>
	);
}
