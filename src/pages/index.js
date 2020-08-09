import React from 'react';
import { graphql } from 'gatsby';

import SEO from '../components/seo';
import MDXContent from '../components/MDXContent/MDXContent';
import Layout, { Grid, GridArea } from '../components/Layout/Layout';
import TimeOfDay from '../components/TimeOfDay/TimeOfDay';
import { useTheme } from '../hooks';
import Box from '../components/Box/Box';

import style from '../styles/pages/index.module.css';

export default function Index({ data, location }) {
	useTheme('--color-main');

	const { introContent, works } = data;

	return (
		<Layout location={location} mainClassName={style.main}>
			<SEO title="Home"></SEO>

			<Grid className={style.grid}>
				<GridArea
					style={{
						gridArea: 'header'
					}}
				>
					<TimeOfDay></TimeOfDay>
				</GridArea>

				<GridArea style={{ gridArea: 'content' }}>
					<MDXContent theme="home">{introContent.body}</MDXContent>
				</GridArea>
			</Grid>

			<Grid>
				{works.edges.map(({ node }) => (
					<GridArea>
						<Box>
							{node.frontmatter.title}
							{/* <MDXContent>{node.body}</MDXContent> */}
						</Box>
					</GridArea>
				))}
			</Grid>
		</Layout>
	);
}

export const pageQuery = graphql`
	query {
		introContent: mdx(
			frontmatter: { type: { eq: "site" }, section: { eq: "intro" } }
		) {
			frontmatter {
				title
			}
			body
		}
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
