import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

import style from './jagged-edge.module.css';

export function JaggedEdge({ align = 'both', children }) {
	return <div className={clsx(style.jagged, style[align])}>{children}</div>;
}

JaggedEdge.propTypes = {
	align: PropTypes.oneOf(['top', 'bottom', 'both']),
	children: PropTypes.node
};
