import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { Input } from '.';

const onChange = jest.fn();

/**
 * 1. O componente deve ser mostrado ao usuário
 * 2. Quando o usuário digitar deve ser refletido o mesmo valor
 * 3. Quando estiver desabilitado o usuário não pode digitar
 * 4. Os componentes de ornamente devem ser mostrados ao usuário quando existirem
 */

describe('<Input/>', () => {
	it('O componente deve ser mostrado ao usuário', () => {
		render(<Input placeholder="E-mail" />);

		const input = screen.getByPlaceholderText('E-mail');
		expect(input).toBeInTheDocument();
	});

	it('Quando o usuário digitar deve ser refletido o mesmo valor', async () => {
		render(<Input onChange={onChange} placeholder="E-mail" />);

		const input = screen.getByPlaceholderText('E-mail');

		expect(input).toBeEnabled();

		await userEvent.type(input, 'email@email.com.br');

		expect(onChange).toHaveBeenCalled();
		expect(input).toHaveValue('email@email.com.br');
	});

	it('Quando estiver desabilitado o usuário não pode digitar', async () => {
		render(<Input disabled onChange={onChange} placeholder="E-mail" />);

		const input = screen.getByPlaceholderText('E-mail');

		expect(input).toBeDisabled();

		await userEvent.type(input, 'email@email.com.br');

		expect(onChange).not.toHaveBeenCalled();
		expect(input).toHaveValue('');
	});

	it('Os componentes de ornamente devem ser mostrados ao usuário quando existirem', async () => {
		render(<Input startAdornment={<p>test</p>} />);

		const startAdornment = screen.getByText(/test/i);

		expect(startAdornment).toBeInTheDocument();
	});
});

describe('<Input.Label/>', () => {
	it('It should have Input.Label Component', () => {
		render(<Input.Label>Email</Input.Label>);

		const inputLabel = screen.getByText('Email');

		expect(inputLabel).toBeInTheDocument();
	});
});

/**
 * 1. Deve referenciar corretamente o input mostrado em tela (Acessibilidade)
 */

describe('<Input/> and <Input.Label/>', () => {
	it('It should references the corresponding input', () => {
		render(
			<form aria-label="Type your password">
				<Input.Label htmlFor="email">Email</Input.Label>
				<Input id="email" />
			</form>,
		);

		const input = screen.getByLabelText('Email');

		expect(input).toBeInTheDocument();
	});
});
