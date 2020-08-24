import React from 'react';
import { Link } from 'gatsby';
import clsx from 'clsx';

import style from './header.module.css';

export function Header() {
	return (
		<header className={clsx(style.header)}>
			<h1 className={clsx(style.title)}>
				<Link to="/" className={style.link}>
					Dan Proudfoot
				</Link>
			</h1>
		</header>
	);
}
