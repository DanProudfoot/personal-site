import React from 'react';
import { graphql } from 'gatsby';

import { SEO } from 'src/components/atoms';
import { HomePage } from 'src/components/organisms';
import { useTheme, useBackground } from 'src/hooks';

export default function Index({ data, location }) {
	// useTheme('dark');

	return (
		<>
			<SEO title="Home"></SEO>
			<HomePage data={data}></HomePage>
		</>
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
