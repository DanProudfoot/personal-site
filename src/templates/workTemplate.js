import React from 'react';
import { graphql } from 'gatsby';
import {
	motion,
	useViewportScroll,
	useTransform,
	useMotionTemplate,
	useSpring
} from 'framer-motion';

import { SEO } from 'src/components/atoms';
import { Main, Section } from 'src/components/molecules';
import { MDXContent, BackgroundImage, Type } from 'src/components/atoms';

import style from './work-template.module.css';
import { useTheme } from 'src/hooks/useTheme';

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
	const { frontmatter, body, id } = mdx;

	useTheme('dark');

	const { scrollY } = useViewportScroll();

	const blurTransform = useTransform(scrollY, [0, 200], [5, 0]);
	const colorTransform = useTransform(scrollY, [0, 200], [0, 0.8]);

	const blur = useMotionTemplate`blur(${blurTransform}px)`;
	const color = useMotionTemplate`rgba(0,0,0, ${colorTransform})`;

	const titleTransformY = useTransform(scrollY, [0, 200], ['-25vh', '0vh']);
	const titleScale = useTransform(scrollY, [0, 200], [1, 0.75]);

	const titleSpringScale = useSpring(titleScale, { damping: 30, mass: 1 });

	return (
		<>
			<SEO title={frontmatter.title}></SEO>
			<Main className={style.main}>
				<motion.h2
					className={style.heading}
					style={{
						y: titleTransformY,
						scale: titleSpringScale
					}}
				>
					{frontmatter.title}
				</motion.h2>
			</Main>

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
							Built {wrapLastWord(frontmatter.builtBy)}
						</div>

						<div className={style.infoItem}>
							Launched: <span>{frontmatter.date}</span>
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
				</motion.div>
			</Section>

			<div className={style.backgroundContainer}>
				<motion.div
					className={style.bgOverlay}
					style={{
						backdropFilter: blur,
						backgroundColor: color
					}}
				></motion.div>
				<BackgroundImage
					imageProps={{
						fluid: frontmatter.featuredImage.childImageSharp.fluid,
						className: style.image
					}}
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
				date(formatString: "MMMM, YYYY")
				title
				link
				builtBy
				stack
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
