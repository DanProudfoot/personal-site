import React from 'react';
import { graphql } from 'gatsby';
import { motion } from 'framer-motion';
import Image from 'gatsby-image';

import Layout, { GridArea } from '../components/Layout/Layout';
import Box from '../components/Box/Box';
import MDXContent from '../components/MDXContent/MDXContent';
import BackgroundImage from '../components/BackgroundImage/BackgroundImage';

export default function Template({ location, data }) {
	const { mdx } = data;
	const { frontmatter, body, id } = mdx;

	return (
		<Layout location={location}>
			<GridArea colStart="1" colEnd="span 2">
				<Box layoutId={`title-${id}`}>
					<h1>{frontmatter.title}</h1>
				</Box>

				<Box layoutId={`box-${id}`} style={{ marginTop: '2em' }}>
					<MDXContent>{body}</MDXContent>
				</Box>
			</GridArea>

			<GridArea colStart="3" colEnd="span 3">
				<Box layoutId={`image-${id}`} type="none" fill>
					<BackgroundImage
						imageProps={{
							fluid:
								frontmatter.featuredImage.childImageSharp.fluid
						}}
					></BackgroundImage>
				</Box>
			</GridArea>
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
