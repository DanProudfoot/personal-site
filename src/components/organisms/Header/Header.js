import React from 'react';
import { Link } from 'gatsby';
import clsx from 'clsx';

import style from './header.module.css';

export function Header({ location }) {
	const isWork = location.pathname.includes('work');

	return (
		<header className={clsx(style.header)}>
			<h1 className={clsx(style.title, { [style.workMode]: isWork })}>
				<Link to="/" className={style.link}>
					Dan Proudfoot
				</Link>
			</h1>
		</header>
	);
}
