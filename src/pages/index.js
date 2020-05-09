import React from 'react';
import { graphql } from 'gatsby';

import Layout, { GridArea } from '../components/Layout/Layout';
import Posts from '../components/Posts/Posts';
import HTMLContent from '../components/HTMLContent/HTMLContent';
import SEO from '../components/seo';

export default function Index({ data, location }) {
	const { pages, introContent } = data;

	return (
		<Layout location={location}>
			<SEO title="Home"></SEO>
			<GridArea type="primary">
				<div>{introContent.frontmatter.title}</div>
				<HTMLContent content={introContent.html}></HTMLContent>
			</GridArea>
			<GridArea type="secondary">
				<Posts pages={pages}></Posts>
			</GridArea>
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
