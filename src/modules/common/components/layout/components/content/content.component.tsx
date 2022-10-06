import React from 'react';

import { Content } from './content.styles';
import { ContentProps } from './content.types';

export const ContentComponent = (props: ContentProps) => {
	const { children } = props;

	return (
		<Content data-testid="ui-component-layout-content">{children}</Content>
	);
};
