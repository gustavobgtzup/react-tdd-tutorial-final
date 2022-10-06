import { render, screen } from '@/tests';
import React from 'react';

import { AppBar } from '.';

describe('<AppBar/>', () => {
	it('It should display AppBar with the correct text content', () => {
		const textContent = 'React + Vite';

		render(<AppBar>{textContent}</AppBar>);

		const navBar = screen.getByText(textContent);

		expect(navBar).toBeInTheDocument();
		expect(navBar).toHaveTextContent(textContent);
	});
});
