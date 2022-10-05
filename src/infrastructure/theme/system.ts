import { DefaultTheme, css } from 'styled-components';

import { FontSizes } from './types';

export type Margins = {
	m?: number;
	mt?: number;
	mr?: number;
	mb?: number;
	ml?: number;
	mx?: number;
	my?: number;
};

export type Paddings = {
	p?: number;
	pt?: number;
	pr?: number;
	pb?: number;
	pl?: number;
	px?: number;
	py?: number;
};

export type Spacings = Margins & Paddings;

export type GetSpacingsParams = {
	margins: Margins;
	paddings: Paddings;
	theme: DefaultTheme;
};

export type GetTypographySizesParams = {
	variant: FontSizes;
	theme: DefaultTheme;
};

export const getSpacings = (params: GetSpacingsParams) => {
	const { margins, paddings, theme } = params;
	const { space } = theme;
	const { m, mt, mr, mb, ml, mx, my } = margins;
	const { p, pt, pr, pb, pl, px, py } = paddings;
	return css`
		${m !== undefined ? `margin: ${space[m]};` : ''}
		${ml !== undefined || mx !== undefined
			? `margin-left: ${space[(ml || mx) as number]};`
			: ''}
	    ${mr !== undefined || mx !== undefined
			? `margin-right: ${space[(mr || mx) as number]};`
			: ''}
	    ${mt !== undefined || my !== undefined
			? `margin-top: ${space[(mt || my) as number]};`
			: ''}
	    ${mb !== undefined || my !== undefined
			? `margin-bottom: ${space[(mb || my) as number]};`
			: ''}
	    ${p !== undefined ? `padding: ${space[p]};` : ''}
	    ${pl !== undefined || px !== undefined
			? `padding-left: ${space[(pl || px) as number]};`
			: ''}
	    ${pr !== undefined || px !== undefined
			? `padding-right: ${space[(pr || px) as number]};`
			: ''}
	    ${pt !== undefined || py !== undefined
			? `padding-top: ${space[(pt || py) as number]};`
			: ''}
	    ${pb !== undefined || py !== undefined
			? `padding-bottom: ${space[(pb || py) as number]};`
			: ''}
	`;
};

export const getTypographySizes = (params: GetTypographySizesParams) => {
	const { variant = 'body1', theme } = params;
	const { fontSizes, lineHeights } = theme;
	const fontSize = fontSizes[variant];
	const lineHeight = lineHeights[variant];

	return css`
		@media (min-width: ${theme.breakpoints.values.xs}) {
			font-size: ${fontSize.mobile};
			line-height: ${lineHeight.mobile};
		}

		@media (min-width: ${theme.breakpoints.values.sm}) {
			font-size: ${fontSize.mobile};
			line-height: ${lineHeight.mobile};
		}

		@media (min-width: ${theme.breakpoints.values.md}) {
			font-size: ${fontSize.tablet};
			line-height: ${lineHeight.tablet};
		}

		@media (min-width: ${theme.breakpoints.values.lg}) {
			font-size: ${fontSize.desktop};
			line-height: ${lineHeight.desktop};
		}

		@media (min-width: ${theme.breakpoints.values.xl}) {
			font-size: ${fontSize.desktop};
			line-height: ${lineHeight.desktop};
		}
	`;
};
