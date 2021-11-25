import React from "react";
import styled from "styled-components";
import { PrivateKey } from "../Main/NcryptorApp";
import SectionCard from "../Main/SectionCard";
import GenerateKeyBtn from "./GenerateKeyBtn";
import NoKeysHeader from "./NoKeysHeader";
import PrivateKeysList from "./PrivateKeysList";
import RefreshKeysBtn from "./RefreshKeysBtn";

type KeyringViewProps = {
  privateKeys: PrivateKey[];
	refreshKeys: Function;
  selectPrivateKey: Function;
  setView: Function;
};

const BtnBar = styled.div`
	display: grid;
	grid-template-columns: 1fr 1fr;
`;

const KeyringView = ({
  privateKeys,
	refreshKeys,
  selectPrivateKey,
  setView
}: KeyringViewProps): JSX.Element => {
  return (
    <section>
      <SectionCard>
				<BtnBar>
					<GenerateKeyBtn setView={setView} />
					<RefreshKeysBtn refreshKeys={refreshKeys} />
				</BtnBar>
        {privateKeys.length < 1 ? (
          <NoKeysHeader />
        ) : (
          <PrivateKeysList
            privateKeys={privateKeys}
            selectPrivateKey={selectPrivateKey}
          />
        )}
      </SectionCard>
    </section>
  );
};

export default KeyringView;