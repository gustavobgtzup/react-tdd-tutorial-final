import React from 'react';
import { Outlet } from 'react-router-dom';

import { Content, Header } from './components';
import { Layout } from './layout.styles';

export const LayoutComponent = () => {
	return (
		<Layout data-testid="ui-component-layout">
			<Header />
			<Content>
				<Outlet />
			</Content>
		</Layout>
	);
};
