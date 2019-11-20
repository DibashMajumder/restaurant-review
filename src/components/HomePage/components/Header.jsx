import React from 'react';
import styled from 'styled-components';

const StyledHeader = styled.div`
	padding: 10px;
	background-color: tomato;
`;

const Header = ({ title }) => (
	<StyledHeader>
		<h1>{title}</h1>
	</StyledHeader>
);

export default Header;
