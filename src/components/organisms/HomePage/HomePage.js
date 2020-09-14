import React from 'react';

import { AnimatedText, JaggedEdge } from 'src/components/atoms';
import { Hero, Posts, Footer } from 'src/components/organisms';
import { Layout, Section } from 'src/components/molecules';

import style from './home-page.module.css';

export function HomePage({ data }) {
	const { introContent, works } = data;

	return (
		<div className={style.home}>
			<AnimatedText></AnimatedText>

			<div className={style.spacer}></div>

			<JaggedEdge align="both">
				<Layout className={style.layout}>
					<Section>
						<Hero content={introContent}></Hero>
					</Section>

					<Section>
						<Posts pages={works}></Posts>
					</Section>
				</Layout>
			</JaggedEdge>

			<Footer></Footer>
		</div>
	);
}
