import React from 'react';

import { MDXRenderer } from 'gatsby-plugin-mdx';

import style from './mdx.module.css';

export default function MDXContent({ children }) {
	return (
		<div className={style.mdx}>
			<MDXRenderer>{children}</MDXRenderer>
		</div>
	);
}
