import { getSpacings } from '@/infrastructure/theme';
import styled from 'styled-components';
import { css } from 'styled-components';

import { AppBarStyleProps, GetAppBarStyles } from './app-bar.types';

export const AppBar = styled.header<AppBarStyleProps>`
	${({ styles }) => styles};
`;

export const getAppBarStyles = (params: GetAppBarStyles) => {
	const { position = 'static', margins, paddings, theme } = params;
	const { pallete, space } = theme;
	const spacingStyles = getSpacings({ margins, paddings, theme });

	return css`
		${spacingStyles}
		background-color: ${pallete.primary.dark};
		position: ${position};
		color: ${pallete.common.white};
		box-shadow: 0px 2px 4px -1px rgb(0 0 0 / 20%),
			0px 4px 5px 0px rgb(0 0 0 / 14%), 0px 1px 10px 0px rgb(0 0 0 / 12%);
		padding: ${space[4]} ${space[6]};
		width: 100%;
		display: flex;
		flex-direction: column;
		flex-shrink: 0;
	`;
};
