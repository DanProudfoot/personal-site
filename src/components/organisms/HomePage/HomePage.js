import React from 'react';

import { AnimatedText, JaggedEdge } from 'src/components/atoms';
import { Hero, Posts, Footer } from 'src/components/organisms';
import { Layout, Section } from 'src/components/molecules';

import style from './home-page.module.css';
import { useBackground } from 'src/hooks';

export function HomePage({ data }) {
	const { introContent, works } = data;
	useBackground({ type: null });

	return (
		<div className={style.home}>
			<JaggedEdge align="bottom" withShadow>
				<div className={style.spacer}>
					<AnimatedText></AnimatedText>
				</div>
			</JaggedEdge>

			<JaggedEdge align="bottom" withShadow>
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
