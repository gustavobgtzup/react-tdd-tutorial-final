import React from 'react';
import { useTheme } from 'styled-components';

import { AppBar, getAppBarStyles } from './app-bar.styles';
import { AppBarProps } from './app-bar.types';

export const AppBarComponent = (props: AppBarProps) => {
	const {
		position = 'static',
		children,
		m,
		mt,
		mr,
		mb,
		ml,
		mx,
		my,
		p,
		pt,
		pr,
		pb,
		pl,
		px,
		py,
		...rest
	} = props;

	const theme = useTheme();

	const margins = {
		m,
		mt,
		mr,
		mb,
		ml,
		mx,
		my,
	};
	const paddings = {
		p,
		pt,
		pr,
		pb,
		pl,
		px,
		py,
	};
	const params = {
		position,
		margins,
		paddings,
		theme,
	};
	const styles = getAppBarStyles(params);

	return (
		<AppBar data-testid="ui-component-app-bar" {...rest} styles={styles}>
			{children}
		</AppBar>
	);
};
