import React from 'react';

import { MDXContent } from 'src/components/atoms';
import { TimeOfDay } from 'src/components/molecules';

import style from './hero.module.css';

export function Hero({ content }) {
	return (
		<div className={style.grid}>
			<div className={style.header}>
				<TimeOfDay></TimeOfDay>
			</div>

			<div className={style.content}>
				<MDXContent theme="home">{content.body}</MDXContent>
			</div>
		</div>
	);
}
