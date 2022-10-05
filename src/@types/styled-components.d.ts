import { theme } from '../infrastructure/theme';
type Theme = typeof theme;

declare module 'styled-components' {
	// eslint-disable-next-line @typescript-eslint/no-empty-interface
	export interface DefaultTheme extends Theme {}

	// Color pallete
	export type TextColors = keyof DefaultTheme['pallete']['text'];
	export type BackgroundColors = keyof DefaultTheme['pallete']['background'];

	// Text Properties
	export type FontWeights = keyof DefaultTheme['fontWeights'];
	export type FontSizes = keyof DefaultTheme['fontSizes'];
	export type Fonts = keyof DefaultTheme['fonts'];
}
