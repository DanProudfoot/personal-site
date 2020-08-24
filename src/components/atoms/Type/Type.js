import React from 'react';

import capsize from 'capsize';

const fontMetrics = {
	capHeight: 702,
	ascent: 750,
	descent: -250,
	lineGap: 0,
	unitsPerEm: 1000
};

export function Type({ as = 'span', capHeight = 16, lineGap = 10, ...props }) {
	const Tag = as;

	const styles = capsize({
		fontMetrics,
		capHeight,
		lineGap
	});

	return <Tag style={styles} {...props}></Tag>;
}
