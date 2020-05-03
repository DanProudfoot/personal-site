import React from 'react';
import { graphql } from 'gatsby';

import PostLink from '../components/atoms/PostLink';
import Layout from '../components/Layout/Layout';
import SEO from '../components/seo';

export default function Index({ data }) {
	const { pages, introContent } = data;

	const Posts = pages.edges
		.filter((edge) => !!edge.node.frontmatter.date) // You can filter your posts based on some criteria
		.map((edge) => <PostLink key={edge.node.id} post={edge.node} />);

	return (
		<Layout>
			<SEO title="Home"></SEO>
			<div>{introContent.frontmatter.title}</div>
			<div dangerouslySetInnerHTML={{ __html: introContent.html }}></div>
			<div>{Posts}</div>
		</Layout>
	);
}

export const pageQuery = graphql`
	query {
		pages: allMarkdownRemark(
			sort: { order: DESC, fields: [frontmatter___date] }
			filter: { frontmatter: { type: { eq: "work" } } }
		) {
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
		introContent: markdownRemark(
			frontmatter: { type: { eq: "site" }, section: { eq: "intro" } }
		) {
			frontmatter {
				title
			}
			html
		}
	}
`;
