import React from 'react';
import { Link } from 'gatsby';

export default function PostLink({ post }) {
	return (
		<div>
			<Link to={post.frontmatter.path}>
				{post.frontmatter.title} ({post.frontmatter.date})
			</Link>
		</div>
	);
}
