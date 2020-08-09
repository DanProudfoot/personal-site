import React from 'react';
import clsx from 'clsx';

import { MDXRenderer } from 'gatsby-plugin-mdx';

import style from './mdx.module.css';

export function MDXContent({ children, theme = 'default' }) {
	return (
		<div className={clsx(style.mdx, style[theme])}>
			<MDXRenderer>{children}</MDXRenderer>
		</div>
	);
}
