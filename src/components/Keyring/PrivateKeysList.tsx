import React from "react";
import styled from "styled-components";
import { KeyTypeDisplayNames } from "../../data/KeyTypeDisplayNames";
import { PrivateKey } from "./KeyringView";

type PrivateKeysProps = {
  privateKeys: Array<PrivateKey>;
};

const List = styled.ul`
  margin: 0.5rem auto;
	padding: 0;
	list-style-type: none;
`;

const ListItem = styled.li`
	display: grid;
	grid-template-columns: 1fr 1fr 1fr;
	margin: 0.25rem 0;
  padding: 0.5rem;
	border-radius: 2px 1.5rem 0.25rem 2px;
	box-shadow: 5px 5px 0px #111;
  color: #cad2c5;
  font-size: 1rem;
	font-weight: bold;
`;

const UserIdLabel = styled.div`
	display: flex;
	align-items: center;
  font-family: "Lora", serif;
	text-align: left;
`;

const KeyThumbprint = styled.div`
	display: flex;
	align-items: center;
  font-family: "Lato", sans-serif;
	text-align: left;
`;

const KeyTypeLabel = styled.div`
	margin: 0.25rem 0 0.25rem 1rem;
  padding: 0.1rem;
  color: #c2cfd6;
  font-family: "Lato", sans-serif;
  font-size: 1.1rem;
`;

const getDisplayName = (fingerprint: string) => fingerprint.substring(fingerprint.length - 8, fingerprint.length);

const getKeyTypeDisplayName = (keyType: string): string => KeyTypeDisplayNames.filter(x => x.keyType === keyType)[0]?.display ?? '';

const PrivateKeysList = ({ privateKeys }: PrivateKeysProps): JSX.Element => {
  return (
    <List>
      {privateKeys.map((privateKey: PrivateKey) => (
        <ListItem style={{ background: privateKey.color }} key={privateKey.fingerprint}>
					<UserIdLabel>{privateKey.userId}</UserIdLabel>
          <KeyThumbprint>{getDisplayName(privateKey.fingerprint)}</KeyThumbprint>
					<KeyTypeLabel>{getKeyTypeDisplayName(privateKey.keyType)}</KeyTypeLabel>
        </ListItem>
      ))}
    </List>
  );
};

export default PrivateKeysList;