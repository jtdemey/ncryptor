import React from "react";
import styled from 'styled-components';

const Header = styled.h2`
	margin-top: 2rem;
	padding-left: 1rem;
	color: #CAD2C5;
	font-family: 'Lato', sans-serif;
	font-size: 1.1rem;
`;

const EncryptView = (): JSX.Element => (
	<section>
		<Header>Compose a message</Header>
	</section>
);

export default EncryptView;