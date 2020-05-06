import React from 'react';
import { graphql } from 'gatsby';

import Layout from '../components/Layout/Layout';
import Posts from '../components/Posts/Posts';
import SEO from '../components/seo';

export default function Index({ data, location }) {
	const { pages, introContent } = data;

	return (
		<Layout location={location}>
			<SEO title="Home"></SEO>
			<div>{introContent.frontmatter.title}</div>
			<div dangerouslySetInnerHTML={{ __html: introContent.html }}></div>
			<Posts pages={pages}></Posts>
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
