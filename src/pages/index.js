import React from 'react';
import { graphql } from 'gatsby';

import SEO from '../components/seo';
import MDXContent from '../components/MDXContent/MDXContent';
import Layout, { GridArea } from '../components/Layout/Layout';
import Box from '../components/Box/Box';
import Posts from '../components/Posts/Posts';

export default function Index({ data, location }) {
	const { pages, introContent } = data;

	return (
		<Layout location={location}>
			<SEO title="Home"></SEO>

			<GridArea
				colStart="2"
				colEnd="span 3"
				rowStart="1"
				style={{ alignSelf: 'center' }}
				anchor="top"
			>
				<Box>
					<MDXContent>{introContent.body}</MDXContent>
				</Box>
			</GridArea>

			<GridArea colStart="1" colEnd="span 5" rowStart="2" anchor="work">
				<Posts pages={pages}></Posts>
			</GridArea>
		</Layout>
	);
}

export const pageQuery = graphql`
	query {
		pages: allMdx(
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
						featuredImage {
							childImageSharp {
								fluid(maxWidth: 300) {
									...GatsbyImageSharpFluid
								}
							}
						}
					}
				}
			}
		}
		introContent: mdx(
			frontmatter: { type: { eq: "site" }, section: { eq: "intro" } }
		) {
			frontmatter {
				title
			}
			body
		}
	}
`;
