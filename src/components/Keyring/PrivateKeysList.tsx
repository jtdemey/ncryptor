import React from "react";
import { motion } from "framer-motion";
import styled from "styled-components";
import { KeyTypeDisplayNames } from "../../data/KeyTypeDisplayNames";
import { shiftLightness } from "../../utils/ColorUtils";
import { PrivateKey } from "./KeyringView";

type PrivateKeysProps = {
  privateKeys: Array<PrivateKey>;
};

const List = styled.ul`
  margin: 0.5rem auto;
  padding: 0;
  list-style-type: none;
`;

const ListItem = styled(motion.li)`
  margin: 0.1rem 0;
  padding: 0.5rem;
  border-radius: 0.5rem 2px 0.5rem 2px;
  box-shadow: 5px 4px 0px #111;
  color: #cad2c5;
  font-size: 1rem;
  font-weight: bold;
`;

const TextContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  text-shadow: -2px 2px 1px #111;
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

const getBackground = (color: string): string =>
  `linear-gradient(45deg, ${color}, ${shiftLightness(color, 10)})`;

const getDisplayName = (fingerprint: string): string =>
  fingerprint.substring(fingerprint.length - 8, fingerprint.length);

const getKeyTypeDisplayName = (keyType: string): string =>
  KeyTypeDisplayNames.filter((x) => x.keyType === keyType)[0]?.display ?? "";

const PrivateKeysList = ({ privateKeys }: PrivateKeysProps): JSX.Element => {
  return (
    <List>
      {privateKeys.map((privateKey: PrivateKey, i: number) => (
        <ListItem
					animate={{ opacity: [0, 1], x: [-50, 0] }}
          style={{ background: getBackground(privateKey.color) }}
					transition={{ duration: 0.25 + (0.1 * i), ease: "easeOut" }}
          key={privateKey.fingerprint}
        >
          <TextContainer>
            <UserIdLabel>{privateKey.userId}</UserIdLabel>
            <KeyThumbprint>
              {getDisplayName(privateKey.fingerprint)}
            </KeyThumbprint>
            <KeyTypeLabel>
              {getKeyTypeDisplayName(privateKey.keyType)}
            </KeyTypeLabel>
          </TextContainer>
        </ListItem>
      ))}
    </List>
  );
};

export default PrivateKeysList;