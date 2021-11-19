import React from "react";
import TextAreaInput from "./TextAreaInput";
import SectionCard from "../Main/SectionCard";
import { PrivateKey } from "../Main/NcryptorApp";

type EncryptViewProps = {
  currentUser: string;
  privateKeys: PrivateKey[];
  setCurrentUser: Function;
};

const EncryptView = ({
  currentUser,
  privateKeys,
  setCurrentUser,
}: EncryptViewProps): JSX.Element => (
  <SectionCard>
    <TextAreaInput
      currentUser={currentUser}
      encryptMode={true}
      privateKeys={privateKeys}
      setCurrentUser={setCurrentUser}
    />
  </SectionCard>
);

export default EncryptView;