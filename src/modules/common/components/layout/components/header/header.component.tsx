import { AppBar } from '@/modules/common/components/UI';

import Header from './header.styles';

export const HeaderComponent = () => {
	return (
		<AppBar>
			<Header.Toolbar>
				<Header.Logo>
					<a href="/">React + Vite</a>
				</Header.Logo>
			</Header.Toolbar>
		</AppBar>
	);
};
