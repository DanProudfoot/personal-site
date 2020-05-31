import React from 'react';
import { graphql } from 'gatsby';

import SEO from '../components/seo';
import Layout, { Grid, GridArea } from '../components/Layout/Layout';
import MDXContent from '../components/MDXContent/MDXContent';
import Box from '../components/Box/Box';
import { useTheme } from '../hooks';

export default function Work({ location, data }) {
	useTheme('--color-secondary');

	return (
		<Layout location={location}>
			<SEO title="Wot I made"></SEO>

			{data.works.edges.map(({ node }) => (
				<Grid>
					<GridArea>
						<Box>
							{node.frontmatter.title}
							{/* <MDXContent>{node.body}</MDXContent> */}
						</Box>
					</GridArea>
				</Grid>
			))}
		</Layout>
	);
}

export const pageQuery = graphql`
	query {
		works: allMdx(
			sort: { order: DESC, fields: [frontmatter___date] }
			filter: {
				frontmatter: { type: { eq: "work" }, active: { eq: true } }
			}
		) {
			edges {
				node {
					id
					frontmatter {
						path
						title
						featuredImage {
							childImageSharp {
								fluid(maxWidth: 400, quality: 80) {
									...GatsbyImageSharpFluid
								}
							}
						}
					}
					body
				}
			}
		}
	}
`;
