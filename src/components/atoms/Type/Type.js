import React from 'react';

import capsize from 'capsize';

const fontMetrics = {
	capHeight: 702,
	ascent: 750,
	descent: -250,
	lineGap: 0,
	unitsPerEm: 1000
};

const styles = capsize({
	fontMetrics,
	capHeight: 44,
	lineGap: 14
});

export function Type({ as = 'span', ...props }) {
	const Tag = as;

	return <Tag style={styles} {...props}></Tag>;
}
