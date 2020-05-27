import React from 'react';
import { graphql } from 'gatsby';

import SEO from '../components/seo';
import MDXContent from '../components/MDXContent/MDXContent';
import Layout, { Grid, GridArea } from '../components/Layout/Layout';
import TimeOfDay from '../components/TimeOfDay/TimeOfDay';

export default function Index({ data, location }) {
	const { introContent } = data;

	return (
		<Layout location={location}>
			<SEO title="Home"></SEO>

			<Grid>
				<GridArea
					style={{
						gridColumn: '2 / span 3',
						gridRow: '2'
					}}
				>
					<TimeOfDay></TimeOfDay>
				</GridArea>

				<GridArea style={{ gridColumn: '3 / span 3', gridRow: '3' }}>
					<MDXContent theme="home">{introContent.body}</MDXContent>
				</GridArea>
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
	}
`;
