import React from 'react';

import style from './footer.module.css';

export function Footer({ children }) {
	return <footer className={style.footer}>{children}</footer>;
}
