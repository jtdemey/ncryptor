import React from "react";
import styled from "styled-components";
import TextAreaInput from "../Encrypt/TextAreaInput";
import SectionCard from "../Main/SectionCard";
import { PrivateKey } from "../Main/NcryptorApp";
import SelectionLabel from "../Encrypt/SelectionLabel";
import SenderSelection from "../Encrypt/SenderSelection";

type DecryptViewProps = {
  currentUser: string;
  privateKeys: PrivateKey[];
  setCurrentUser: Function;
};

const InputRow = styled.div`
  display: grid;
  grid-template-columns: 1fr 3fr;
`;

const DecryptView = ({
  currentUser,
  privateKeys,
  setCurrentUser,
}: DecryptViewProps): JSX.Element => (
  <SectionCard>
		<InputRow>
			<SelectionLabel text="To: " />
			<SenderSelection
				currentUser={currentUser}
				privateKeys={privateKeys}
				setCurrentUser={setCurrentUser}
			/>
		</InputRow>
    <TextAreaInput
      currentUser={currentUser}
      encryptMode={false}
    />
  </SectionCard>
);

export default DecryptView;