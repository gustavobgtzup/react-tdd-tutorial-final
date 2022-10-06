import RouterConfig from '@/infrastructure/navigation';
import GlobalStyle, { theme } from '@/infrastructure/theme';
import { ThemeProvider } from 'styled-components';

const App = () => {
	return (
		<ThemeProvider theme={theme}>
			<RouterConfig />
			<GlobalStyle />
		</ThemeProvider>
	);
};

export default App;
