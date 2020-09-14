import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

import style from './jagged-edge.module.css';

export function JaggedEdge({ align = 'both', children }) {
	switch (align) {
		case 'top':
			return (
				<div className={clsx(style.jagged, style.top)}>{children}</div>
			);

		case 'bottom':
			return (
				<div className={clsx(style.jagged, style.bottom)}>
					{children}
				</div>
			);

		default:
			return (
				<div className={clsx(style.jagged, style.top)}>
					<div className={clsx(style.jagged, style.bottom)}>
						{children}
					</div>
				</div>
			);
	}
}

JaggedEdge.propTypes = {
	align: PropTypes.oneOf(['top', 'bottom', 'both']),
	children: PropTypes.node
};
