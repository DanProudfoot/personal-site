import React from 'react';
import { graphql } from 'gatsby';

import SEO from '../components/seo';
import MDXContent from '../components/MDXContent/MDXContent';
import Layout, { Grid, GridArea } from '../components/Layout/Layout';
import TimeOfDay from '../components/TimeOfDay/TimeOfDay';

import style from '../styles/pages/index.module.css';

export default function Index({ data, location }) {
	const { introContent } = data;

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
