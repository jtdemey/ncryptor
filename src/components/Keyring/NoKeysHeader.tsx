import React from "react";
import styled from 'styled-components';

const Header = styled.h2`
	margin: auto;
	color: #84a98c;
  font-family: "Lato", sans-serif;
  font-size: 1.2rem;
	text-align: center;
`;

const NoKeysHeader = (): JSX.Element => (
	<Header>
		No private keys found
	</Header>
);

export default NoKeysHeader;