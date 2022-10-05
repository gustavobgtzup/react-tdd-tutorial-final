import { ThemeProvider } from 'styled-components';

import GlobalStyle, { theme } from './infrastructure/theme';
import { Home } from './modules/main/screens/home';

const App = () => {
	return (
		<ThemeProvider theme={theme}>
			<Home />
			<GlobalStyle />
		</ThemeProvider>
	);
};

export default App;
