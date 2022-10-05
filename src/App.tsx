import GlobalStyle, { theme } from '@/infrastructure/theme';
import { Home } from '@/modules/main/screens/home';
import { ThemeProvider } from 'styled-components';

const App = () => {
	return (
		<ThemeProvider theme={theme}>
			<Home />
			<GlobalStyle />
		</ThemeProvider>
	);
};

export default App;
