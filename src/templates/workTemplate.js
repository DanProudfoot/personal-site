import React from 'react';
import { graphql } from 'gatsby';
import { MDXRenderer } from 'gatsby-plugin-mdx';

import Layout from '../components/Layout/Layout';

export default function Template({ location, data }) {
	const { mdx } = data; // data.mdx holds your post data
	const { frontmatter, body } = mdx;
	return (
		<Layout location={location}>
			<div className="blog-post-container">
				<div className="blog-post">
					<h1>{frontmatter.title}</h1>
					<h2>{frontmatter.date}</h2>

					<MDXRenderer>{body}</MDXRenderer>
				</div>
			</div>
		</Layout>
	);
}

export const pageQuery = graphql`
	query($path: String!) {
		mdx(frontmatter: { path: { eq: $path } }) {
			body
			frontmatter {
				date(formatString: "DD MMMM, YYYY")
				link
				path
				stack
				title
			}
		}
	}
`;
