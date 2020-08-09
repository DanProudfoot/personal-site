import React from 'react';
import { graphql } from 'gatsby';

import { SEO } from 'src/components/atoms';
import { Layout } from 'src/components/molecules';
import { Hero, Posts } from 'src/components/organisms';

export default function Index({ data, location }) {
	const { introContent, works } = data;

	return (
		<Layout location={location}>
			<SEO title="Home"></SEO>

			<Hero content={introContent}></Hero>
			<Posts pages={works}></Posts>
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
