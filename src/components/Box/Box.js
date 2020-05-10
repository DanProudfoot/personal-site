import React from 'react';

import style from './box.module.css';

export default function Box({ children }) {
	return <div className={style.box}>{children}</div>;
}
