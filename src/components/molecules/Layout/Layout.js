import React from 'react';
import clsx from 'clsx';

import style from './layout.module.css';

export function Layout({ children, className }) {
	return (
		<main className={clsx(style.layout, className)}>
			<div className={style.layoutInner}>{children}</div>
		</main>
	);
}

export function Section({ children, className }) {
	return (
		<section className={clsx(style.shared, style.section, className)}>
			{children}
		</section>
	);
}
