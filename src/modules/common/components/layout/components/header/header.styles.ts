import styled from 'styled-components';

const Toolbar = styled.div`
	display: flex;
	align-items: center;
	font-family: 'Roboto', sans-serif;
`;

const Logo = styled.div`
	position: relative;
	z-index: 2;
`;

export default {
	Toolbar,
	Logo,
};
