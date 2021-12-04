import React from "react";
import { motion } from "framer-motion";
import styled from "styled-components";
import { KeyTypeDisplayNames } from "../../data/KeyTypeDisplayNames";
import { PrivateKey } from "./../Main/NcryptorApp";
import KeysListLegend from "./KeysListLegend";

type PrivateKeysListProps = {
  privateKeys: Array<PrivateKey>;
	selectPrivateKey: Function;
};

export const List = styled.ul`
  margin: 0.5rem auto;
  padding: 0;
  list-style-type: none;
`;

export const ListItem = styled(motion.li)`
  margin: 0.12rem 0;
  padding: 0.5rem;
  background: hsl(201, 20%, 20%);
  box-shadow: 4px 4px 0px #111;
  color: #cad2c5;
  cursor: pointer;
  font-size: 1rem;
  font-weight: bold;
	opacity: 0;
`;

export const TextContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  text-shadow: -2px 2px 1px #111;
`;

export const UserIdLabel = styled.div`
  display: flex;
  align-items: center;
  font-family: "Lora", serif;
  text-align: left;
`;

export const KeyThumbprint = styled.div`
  display: flex;
  align-items: center;
  font-family: "Lato", sans-serif;
  text-align: left;
`;

export const KeyTypeLabel = styled.div`
  margin: 0.25rem 0 0.25rem 1rem;
  padding: 0.1rem;
  color: #c2cfd6;
  font-family: "Lato", sans-serif;
  font-size: 1.1rem;
  text-align: center;
`;

const getDisplayUserId = (userId: string): string =>
	userId.length > 9
		? `${userId.substring(0, 9)}...`
		: userId;

const getDisplayFingerprint = (fingerprint: string): string =>
  fingerprint.substring(fingerprint.length - 8, fingerprint.length);

const getKeyTypeDisplayName = (keyType: string): string =>
  KeyTypeDisplayNames.filter(x => x.keyType === keyType)[0]?.display ?? "";

const PrivateKeysList = ({
  privateKeys,
	selectPrivateKey
}: PrivateKeysListProps): JSX.Element => {
  return (
    <>
      <KeysListLegend />
      <List>
        {privateKeys.map((privateKey: PrivateKey, i: number) => (
          <ListItem
            animate={{ opacity: [0, 1], x: [-50, 0] }}
            key={privateKey.fingerprint}
						onClick={() => selectPrivateKey(privateKey.fingerprint)}
            style={{ background: privateKey.color }}
            transition={{ duration: 0.25 + 0.1 * i, ease: "easeOut" }}
          >
            <TextContainer>
              <UserIdLabel>{getDisplayUserId(privateKey.userId)}</UserIdLabel>
              <KeyThumbprint>
                {getDisplayFingerprint(privateKey.fingerprint)}
              </KeyThumbprint>
              <KeyTypeLabel>
                {getKeyTypeDisplayName(privateKey.keyType)}
              </KeyTypeLabel>
            </TextContainer>
          </ListItem>
        ))}
      </List>
    </>
  );
};

export default PrivateKeysList;
