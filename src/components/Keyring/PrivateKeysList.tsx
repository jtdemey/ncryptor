import React from "react";
import styled from 'styled-components';

type PrivateKeysProps = {
	privateKeys: Array<string>
};

const List = styled.ul`
	margin: 1rem auto;
`;

const ListItem = styled.li`
	padding: 0.5rem;
`;

const PrivateKeysList = ({ privateKeys }: PrivateKeysProps): JSX.Element => (
	<List>
		{privateKeys.map((pKey: string) => (
			<ListItem key={pKey} />
		))}
	</List>
);

export default PrivateKeysList;