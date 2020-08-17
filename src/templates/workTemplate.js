import React from 'react';
import { graphql } from 'gatsby';
import {
	motion,
	useViewportScroll,
	useTransform,
	useMotionTemplate
} from 'framer-motion';

import { SEO } from 'src/components/atoms';
import { Layout } from 'src/components/molecules';
import { MDXContent, BackgroundImage } from 'src/components/atoms';

import style from './work-template.module.css';

export default function Template({ location, data }) {
	const { mdx } = data;
	const { frontmatter, body, id } = mdx;

	const { scrollYProgress } = useViewportScroll();
	const blurTransform = useTransform(scrollYProgress, (value) => value * 5);
	const blur = useMotionTemplate`blur(${blurTransform}px)`;

	return (
		<>
			<SEO title={frontmatter.title}></SEO>

			<Layout location={location}>
				<div className={style.contentSheet}>
					<h1 className={style.heading}>{frontmatter.title}</h1>
					<MDXContent>{body}</MDXContent>
				</div>
			</Layout>

			<div className={style.backgroundContainer}>
				<motion.div
					className={style.bgOverlay}
					style={{ backdropFilter: blur, opacity: scrollYProgress }}
				></motion.div>
				<BackgroundImage
					imageProps={{
						fluid: frontmatter.featuredImage.childImageSharp.fluid
					}}
					layoutId={`image-${id}`}
					className={style.background}
				></BackgroundImage>
			</div>
		</>
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
						fluid(maxWidth: 1920, quality: 80) {
							...GatsbyImageSharpFluid
						}
					}
				}
			}
		}
	}
`;
