import React from 'react';

import { MDXContent } from 'src/components/atoms';
import { Grid, GridArea, TimeOfDay } from 'src/components/molecules';

import style from './hero.module.css';

export function Hero({ content }) {
	return (
		<Grid className={style.grid}>
			<GridArea
				style={{
					gridArea: 'header'
				}}
			>
				<TimeOfDay></TimeOfDay>
			</GridArea>

			<GridArea style={{ gridArea: 'content' }}>
				<MDXContent theme="home">{content.body}</MDXContent>
			</GridArea>
		</Grid>
	);
}
