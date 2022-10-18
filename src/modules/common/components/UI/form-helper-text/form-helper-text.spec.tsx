import { render, screen } from '@testing-library/react';

import { FormHelperText } from './form-helper-text.component';
/**
 * 1. O componente deve estar disponível para o usuário
 * 2. Quando não existir erro não deve ser exibido nenhum texto de ajuda
 * 3. Quando existir erro deve ser exibido um texto de ajuda
 *
 */

const defaultErrorMessage = '';
const errorMessage = 'A senha é obrigatória';

describe('<FormHelperText/>', () => {
	it('O componente deve estar disponível para o usuário', () => {
		render(<FormHelperText />);

		const helperText = screen.getByTestId('form-helper-text-component');

		expect(helperText).toBeInTheDocument();
	});

	it('O componente deve estar disponível para o usuário', () => {
		render(
			<FormHelperText error={!!defaultErrorMessage}>
				{defaultErrorMessage}
			</FormHelperText>,
		);

		const helperText = screen.getByTestId('form-helper-text-component');

		expect(helperText).toHaveTextContent(defaultErrorMessage);
	});

	it('Quando existir erro deve ser exibido um texto de ajuda', () => {
		render(
			<FormHelperText error={!!errorMessage}>
				{errorMessage}
			</FormHelperText>,
		);

		const helperText = screen.getByText(errorMessage);

		expect(helperText).toHaveTextContent(errorMessage);
	});
});
