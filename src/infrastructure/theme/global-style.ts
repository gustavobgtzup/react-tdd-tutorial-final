import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  html, #root {
    -webkit-font-smoothing: antialiased;
    scroll-behavior: smooth;
    font-family: ${({ theme }) => theme.fonts.body1}, ${({ theme }) =>
	theme.fonts.monospace};
    font-size: 62.5%;
  }

  body {
    font-size: ${({ theme }) => theme.fontSizes.body1.desktop};
    color: ${({ theme }) => theme.pallete.text.primary};
  }

  button {
    border: none;
    margin: 0;
    padding: 0;
    background: transparent;
    color: inherit;
    font: inherit;
    -webkit-font-smoothing: inherit;
    -moz-osx-font-smoothing: inherit;
    -webkit-appearance: none;
  }
`;
