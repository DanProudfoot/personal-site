//
// Implement Gatsby's Browser APIs in this file.
//
// See: https://www.gatsbyjs.org/docs/browser-apis/
//

// You can delete this file if you're not using it

import React from 'react'

import { Page } from './src/components/molecules'
import Providers from './src/providers'

import 'src/styles/main.css';

export const wrapPageElement = ({ element, props }) => {
	// props provide same data to Layout as Page element will get
	// including location, data, etc - you don't need to pass it
	return (
		<Providers location={props.location}>
			<Page >
				{element}
			</Page>
		</Providers>
	);
};

const transitionDelay = 750;

export const shouldUpdateScroll = ({ routerProps, getSavedScrollPosition }) => {
	const savedPosition = getSavedScrollPosition(routerProps.location);

	setTimeout(() => {
		window.scrollTo(...(savedPosition || [0, 0]));
	}, transitionDelay);

	return false;
};
