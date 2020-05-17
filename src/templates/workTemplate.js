import React from 'react';
import { graphql } from 'gatsby';

import Layout, { Grid, GridArea } from '../components/Layout/Layout';
import Box from '../components/Box/Box';
import MDXContent from '../components/MDXContent/MDXContent';
import BackgroundImage from '../components/BackgroundImage/BackgroundImage';

import style from './work-template.module.css';

export default function Template({ location, data }) {
	const { mdx } = data;
	const { frontmatter, body, id } = mdx;

	return (
		<Layout location={location}>
			<Grid rows="auto 1fr 2fr">
				<GridArea colStart="1" colEnd="span 2">
					<Box layoutId={`title-${id}`} theme="blur" padding="24">
						<h1 className={style.heading}>{frontmatter.title}</h1>
					</Box>
				</GridArea>

				<GridArea
					colStart="1"
					colEnd="span 2"
					rowStart="2"
					rowEnd="span 2"
				>
					<Box layoutId={`box-${id}`}>
						<MDXContent>{body}</MDXContent>
					</Box>
				</GridArea>

				<GridArea colStart="3" colEnd="span 3" rowEnd="span 2">
					<Box layoutId={`image-${id}`} theme="none" fill>
						<BackgroundImage
							imageProps={{
								fluid:
									frontmatter.featuredImage.childImageSharp
										.fluid
							}}
						></BackgroundImage>
					</Box>
				</GridArea>
			</Grid>
		</Layout>
	);
}

export const pageQuery = graphql`
	query($path: String!) {
		mdx(frontmatter: { path: { eq: $path } }) {
			id
			body
			frontmatter {
				date(formatString: "DD MMMM, YYYY")
				link
				path
				stack
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
`;
