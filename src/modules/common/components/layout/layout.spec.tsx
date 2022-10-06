import { render, screen } from '@/tests';
import React from 'react';

import { Layout } from '.';

describe('<Layout/>', () => {
	it('should have a Layout Component', () => {
		render(<Layout />);

		expect(
			screen.getByTestId('ui-component-layout-content'),
		).toBeInTheDocument();
	});
});
