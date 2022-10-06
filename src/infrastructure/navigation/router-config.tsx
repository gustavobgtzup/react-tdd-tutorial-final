import { Layout } from '@/modules/common/components';
import HomeScreen from '@/modules/main/screens/home';
import React from 'react';
import { Routes, Route } from 'react-router-dom';

import NotFoundScreen from './not-found';
import { MAIN } from './router-paths';

export const RouterConfig = () => {
	return (
		<Routes>
			<Route path={MAIN.ROOT} element={<Layout />}>
				<Route index element={<HomeScreen />} />

				<Route path="*" element={<NotFoundScreen />} />
			</Route>
		</Routes>
	);
};
