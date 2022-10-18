import { AppBar } from '@/modules/common/components/UI';

import Header from './header.styles';

export const HeaderComponent = () => {
	return (
		<AppBar>
			<Header.Toolbar>
				<Header.Logo>
					<a href="/">React TDD Tutorial</a>
				</Header.Logo>
			</Header.Toolbar>
		</AppBar>
	);
};
