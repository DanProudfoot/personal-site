import React from 'react';

import style from './page.module.css';

export function Page({ children }) {
	return <div className={style.page}>{children}</div>;
}
