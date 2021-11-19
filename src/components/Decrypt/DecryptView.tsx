import React from "react";
import TextAreaInput from "../Encrypt/TextAreaInput";
import SectionCard from "../Main/SectionCard";
import { PrivateKey } from "../Main/NcryptorApp";

type DecryptViewProps = {
  currentUser: string;
  privateKeys: PrivateKey[];
  setCurrentUser: Function;
};

const DecryptView = ({
  currentUser,
  privateKeys,
  setCurrentUser,
}: DecryptViewProps): JSX.Element => (
  <SectionCard>
    <TextAreaInput
      currentUser={currentUser}
      encryptMode={false}
      privateKeys={privateKeys}
      setCurrentUser={setCurrentUser}
    />
  </SectionCard>
);

export default DecryptView;