import React from 'react';
import { graphql } from 'gatsby';
import {
	motion,
	useViewportScroll,
	useTransform,
	useSpring
} from 'framer-motion';
import Image from 'gatsby-image';
import { Video } from 'cloudinary-react';

import { SEO } from 'src/components/atoms';
import { Section } from 'src/components/molecules';
import { MDXContent, Type } from 'src/components/atoms';

import style from './work-template.module.css';
import { useTheme, useBackground } from 'src/hooks';

const variants = {
	initial: {
		y: '50vh'
	},
	enter: {
		y: '0vh',
		transition: {
			delay: 0.5
		}
	}
};

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

	useTheme(frontmatter.scheme || 'dark');
	useBackground({ type: 'image', value: frontmatter.featuredImage });

	const { scrollY } = useViewportScroll();

	const titleTransformY = useTransform(scrollY, [0, 200], ['-25vh', '0vh']);
	const titleScale = useTransform(scrollY, [0, 200], [1, 0.75]);

	const titleSpringScale = useSpring(titleScale, { damping: 30, mass: 1 });

	return (
		<>
			<SEO title={frontmatter.title}></SEO>
			{/* <Main className={style.main}>
				<motion.h2
					className={style.heading}
					style={{
						y: titleTransformY,
						scale: titleSpringScale
					}}
				>
					{frontmatter.title}
				</motion.h2>
			</Main> */}

			<Section>
				<motion.div
					className={style.contentSheet}
					initial="initial"
					animate="enter"
					variants={variants}
				>
					{frontmatter.link && (
						<a
							href={frontmatter.link}
							alt=""
							target="_blank"
							rel="noopener noreferrer"
							className={style.link}
						>
							<Type capHeight={20}>View Site {'>'}</Type>
						</a>
					)}

					<div className={style.info}>
						<div className={style.infoItem}>
							<div>Built {wrapLastWord(frontmatter.builtBy)}</div>
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

						{/* {frontmatter.featuredVideo && (
							<Video
								publicId={frontmatter.featuredVideo}
								width="500"
								crop="scale"
								loop={true}
								autoPlay={true}
							></Video>
						)} */}
					</div>
				</motion.div>
			</Section>
		</>
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
