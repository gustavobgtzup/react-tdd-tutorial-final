import { theme } from './theme';
type Theme = typeof theme;

// Text Properties
export type FontWeights = keyof Theme['fontWeights'];
export type FontSizes = keyof Theme['fontSizes'];
export type Fonts = keyof Theme['fonts'];
