import React from 'react';

import { AppBar } from './app-bar.styles';
import { AppBarProps } from './app-bar.types';

export const AppBarComponent = (props: AppBarProps) => {
	const { children, ...rest } = props;

	return (
		<AppBar data-testid="ui-component-app-bar" {...rest}>
			{children}
		</AppBar>
	);
};
