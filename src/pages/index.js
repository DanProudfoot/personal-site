import React from 'react';
import { graphql } from 'gatsby';

import SEO from '../components/seo';
import MDXContent from '../components/MDXContent/MDXContent';
import Layout, { Grid, GridArea } from '../components/Layout/Layout';
import Posts from '../components/Posts/Posts';
import TimeOfDay from '../components/TimeOfDay/TimeOfDay';

export default function Index({ data, location }) {
	const { pages, introContent } = data;

	return (
		<Layout location={location}>
			<SEO title="Home"></SEO>

			<Grid rows="1fr auto max-content 1fr">
				<GridArea
					colStart="2"
					colEnd="span 3"
					rowStart="2"
					anchor="top"
				>
					<TimeOfDay></TimeOfDay>
				</GridArea>

				<GridArea colStart="3" colEnd="span 3" rowStart="3">
					<MDXContent theme="home">{introContent.body}</MDXContent>
				</GridArea>
			</Grid>

			<Grid>
				<GridArea colStart="1" colEnd="span 5" anchor="work">
					<Posts pages={pages}></Posts>
				</GridArea>
			</Grid>
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
								fluid(maxWidth: 400, quality: 80) {
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
