import React from "react";
import BackBtn from "../Main/BackBtn";
import CancelCreateBtn from "../Generate/CancelCreateBtn";
import AddContactSubmitBtn from "./AddContactSubmitBtn";
import PublicKeyInput from "./PublicKeyInput";
import { Container, Header, BtnBar } from "../Generate/GenerateKeyForm";
import { AppViews } from "../../data/AppViews";
import { sanitizeInput } from "../../utils/StringSanitizer";

type AddContactFormProps = {
  setView: Function;
};

const AddContactForm = ({ setView }: AddContactFormProps): JSX.Element => {
  const [publicKeyText, setPublicKeyText] = React.useState("");
  return (
    <Container>
      <BackBtn clickFunc={() => setView(AppViews.Contacts)} />
      <Header>Add a contact's public key</Header>
      <PublicKeyInput setText={setPublicKeyText} text={publicKeyText} />
      <BtnBar>
        <AddContactSubmitBtn publicKey={publicKeyText} />
        <CancelCreateBtn clickFunc={() => setView(AppViews.Keyring)} />
      </BtnBar>
    </Container>
  );
};

export default AddContactForm;
