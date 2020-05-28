import React from 'react';
import { graphql } from 'gatsby';

import SEO from '../components/seo';
import Layout, { Grid, GridArea } from '../components/Layout/Layout';
import MDXContent from '../components/MDXContent/MDXContent';
import Box from '../components/Box/Box';

export default function Work({ location, data }) {
	console.log(data);
	return (
		<Layout location={location} colorTheme="--color-secondary">
			<SEO title="Wot I made"></SEO>

			<Grid>
				{data.works.edges.map(({ node }) => (
					<GridArea>
						<Box>
							<MDXContent>{node.body}</MDXContent>
						</Box>
					</GridArea>
				))}
			</Grid>
		</Layout>
	);
}

export const pageQuery = graphql`
	query {
		works: allMdx(
			sort: { order: DESC, fields: [frontmatter___date] }
			filter: { frontmatter: { type: { eq: "work" } } }
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
