import React from 'react';

export default function HTMLContent({ content }) {
	return <div dangerouslySetInnerHTML={{ __html: content }}></div>;
}
