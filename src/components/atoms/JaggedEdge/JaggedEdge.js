import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

import style from './jagged-edge.module.css';

export function JaggedEdge({
	align = 'both',
	withShadow,
	lightShadow,
	children
}) {
	return (
		<div
			className={clsx(style.jagged, style[align], {
				[style.withShadow]: withShadow,
				[style.light]: lightShadow
			})}
		>
			<div className={clsx(style.mask, style[align])}>{children}</div>
		</div>
	);
}

JaggedEdge.propTypes = {
	align: PropTypes.oneOf(['top', 'bottom', 'both']),
	children: PropTypes.node
};
