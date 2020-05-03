import React from 'react';
import { graphql } from 'gatsby';

import PostLink from '../components/atoms/PostLink';
import Layout from '../components/Layout/Layout';

export default function Index({
	data: {
		allMarkdownRemark: { edges }
	}
}) {
	const Posts = edges
		.filter((edge) => !!edge.node.frontmatter.date) // You can filter your posts based on some criteria
		.map((edge) => <PostLink key={edge.node.id} post={edge.node} />);

	return (
		<Layout>
			<div>{Posts}</div>
		</Layout>
	);
}

export const pageQuery = graphql`
	query {
		allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
			edges {
				node {
					id
					excerpt(pruneLength: 250)
					frontmatter {
						date(formatString: "MMMM DD, YYYY")
						path
						title
					}
				}
			}
		}
	}
`;
