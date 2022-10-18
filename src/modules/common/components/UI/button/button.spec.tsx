import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { Button } from '.';

const onClick = jest.fn();
/**
 * 1. O componente deve estar disponível e com o texto correto
 * 2. Deve chamar o evento quanto estiver disponível e for clicado
 * 3. Não deve chamar o evento quando não estiver disponível e for clicado
 */

describe('<Button/>', () => {
	it('O componente deve estar disponível e com o texto correto', () => {
		render(<Button>Button</Button>);

		const button = screen.getByRole('button', { name: 'Button' });

		expect(button).toBeInTheDocument();
		expect(button.textContent).toBe('Button');
	});

	it('Deve chamar o evento quanto estiver disponível e for clicado', async () => {
		render(<Button onClick={onClick}>Button</Button>);

		const button = screen.getByRole('button', { name: 'Button' });

		expect(button).toBeEnabled();

		await userEvent.click(button);

		expect(onClick).toHaveBeenCalled();
	});

	it('Não deve chamar o evento quando não estiver disponível e for clicado', async () => {
		render(
			<Button disabled onClick={onClick}>
				Button
			</Button>,
		);

		const button = screen.getByRole('button', { name: 'Button' });

		expect(button).toBeDisabled();

		await userEvent.click(button);

		expect(onClick).not.toHaveBeenCalled();
	});
});
