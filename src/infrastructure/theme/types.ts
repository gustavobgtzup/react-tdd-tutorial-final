import { theme } from './theme';
type Theme = typeof theme;

// Color pallete
export type TextColors = keyof Theme['pallete']['text'];
export type BackgroundColors = keyof Theme['pallete']['background'];

// Text Properties
export type FontWeights = keyof Theme['fontWeights'];
export type FontSizes = keyof Theme['fontSizes'];
export type Fonts = keyof Theme['fonts'];
