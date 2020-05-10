import React from 'react';

import PostLink from '../PostLink/PostLink';

import style from './posts.module.css';

export default function Posts({ pages }) {
	const Posts = pages.edges
		.filter((edge) => !!edge.node.frontmatter.date) // You can filter your posts based on some criteria
		.map((edge) => <PostLink key={edge.node.id} post={edge.node} />);

	return (
		<div className={style.group}>
			<div>Oberserve! Things I’ve built!</div>
			{Posts}
		</div>
	);
}
