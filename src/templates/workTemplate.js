import React from 'react';
import { graphql } from 'gatsby';
import {
	motion,
	useViewportScroll,
	useTransform,
	useSpring
} from 'framer-motion';
import { useWindowSize } from 'react-use';
import Image from 'gatsby-image';
import { Video } from 'cloudinary-react';

import { SEO, Heading } from 'src/components/atoms';
import { Section, Layout, Transition } from 'src/components/molecules';
import { MDXContent, JaggedEdge } from 'src/components/atoms';
import { useBackground } from 'src/hooks';

import style from './work-template.module.css';

const wrapLastWord = (text) => {
	const split = text.split(' ');
	const pop = split.pop();

	return (
		<>
			{split.join(' ')} <span>{pop}</span>
		</>
	);
};

export default function WorkTemplate({ data }) {
	const { mdx } = data;
	const { frontmatter, body } = mdx;
	const { height } = useWindowSize();

	useBackground({ type: 'image', value: frontmatter.featuredImage });

	const { scrollY } = useViewportScroll();

	const titleTransformY = useTransform(
		scrollY,
		[0, height / 4],
		['0vh', '35vh']
	);
	const titleScale = useTransform(scrollY, [0, height / 4], [1, 0.75]);
	const titleSpringScale = useSpring(titleScale, { damping: 30, mass: 1 });

	const titleTransformBlur = useTransform(
		scrollY,
		[0, height / 4],
		['blur(0px)', 'blur(10px)']
	);

	return (
		<Transition>
			<SEO title={frontmatter.title}></SEO>

			<div className={style.spacer}>
				<motion.div
					className={style.headingContainer}
					style={{
						y: titleTransformY,
						scale: titleSpringScale
					}}
				>
					<Heading disableAppear as="h1" className={style.heading}>
						{frontmatter.title}
					</Heading>
				</motion.div>
			</div>

			<JaggedEdge align="top">
				<Layout className={style.layout}>
					<Section className={style.contentSection}>
						{frontmatter.link && (
							<a
								href={frontmatter.link}
								alt=""
								target="_blank"
								rel="noopener noreferrer"
								className={style.link}
							>
								<Heading
									className={style.linkHeading}
									disableAppear
								>
									View Site {'>'}
								</Heading>
							</a>
						)}

						<div className={style.info}>
							<div className={style.infoItem}>
								<div>
									Built {wrapLastWord(frontmatter.builtBy)}
								</div>
							</div>

							<div className={style.infoItem}>
								<div>
									Launched: <span>{frontmatter.date}</span>
								</div>
							</div>
						</div>

						<div className={style.sidebar}>
							<h2 className={style.stack}>Stack:</h2>
							<ul>
								{frontmatter.stack.map((item) => (
									<li key={item}>{item}</li>
								))}
							</ul>
						</div>

						<div className={style.content}>
							<MDXContent>{body}</MDXContent>
						</div>

						<div className={style.gallery}>
							{frontmatter?.gallery?.map((item) => (
								<Image
									key={item.childImageSharp.id}
									className={style.galleryImage}
									fluid={item.childImageSharp.fluid}
								></Image>
							))}
						</div>
					</Section>
				</Layout>
			</JaggedEdge>

			<motion.div
				className={style.underlay}
				style={{ backdropFilter: titleTransformBlur }}
			></motion.div>
		</Transition>
	);
}

export const pageQuery = graphql`
	query($path: String!) {
		mdx(frontmatter: { path: { eq: $path } }) {
			id
			body
			frontmatter {
				date(formatString: "MMMM YYYY")
				title
				link
				builtBy
				stack
				gallery {
					childImageSharp {
						id
						fluid(maxWidth: 1080, quality: 80) {
							...GatsbyImageSharpFluid
						}
					}
				}
				featuredVideo
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

/*
	<div className={style.gallery}>
		{frontmatter?.gallery?.map((item) => (
			<Image
				key={item.childImageSharp.id}
				className={style.galleryImage}
				fluid={item.childImageSharp.fluid}
			></Image>
		))}

		{/* {frontmatter.featuredVideo && (
		<Video
			publicId={frontmatter.featuredVideo}
			width="500"
			crop="scale"
			loop={true}
			autoPlay={true}
		></Video>
	)}
	</div>

*/
