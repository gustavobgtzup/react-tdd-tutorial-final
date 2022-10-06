import styled, { css } from 'styled-components';

const Toolbar = styled.div`
	${({ theme }) => css`
		display: flex;
		align-items: center;
		font-family: ${theme.fonts.body2};
	`}
`;

const Logo = styled.div`
	position: relative;
	z-index: 2;
`;

export default {
	Toolbar,
	Logo,
};
