import React from "react";
import styled from "styled-components";
import DecryptView from "../Decrypt/DecryptView";
import EncryptView from "../Encrypt/EncryptView";
import SettingsView from "../Settings/SettingsView";
import KeyringView from "../Keyring/KeyringView";
import GenerateKeyView from "../Generate/GenerateKeyView";
import ContactsView from "../Contacts/ContactsView";
import KeyDetailsView from "../KeyDetails/KeyDetailsView";
import AddContactView from "../AddContact/AddContactView";
import { AppViews } from "../../data/AppViews";
import { PrivateKey, PublicKey } from "./NcryptorApp";

type ViewRouterProps = {
  currentUser: string;
  privateKeys: PrivateKey[];
  publicKeys: PublicKey[];
  refreshContacts: Function;
  refreshKeys: Function;
  selectContact: Function;
  selectedContact: string;
  selectPrivateKey: Function;
  selectedPrivateKey: string;
  setCurrentUser: Function;
  setView: Function;
  view: AppViews;
};

const View = styled.div`
  width: 100%;
  height: 100%;
  overflow-y: scroll;
  scrollbar-color: #777 #444;
  scrollbar-width: thin;

  ::-webkit-scrollbar {
    width: 0.25rem;
  }

  ::-webkit-scrollbar-track {
    display: none;
    background: #777;
  }

  ::-webkit-scrollbar-thumb {
    background: #444;
    border-radius: 4px;
  }

  ::-webkit-scrollbar-thumb:hover {
    background: #555;
  }
`;

const getView = ({
  currentUser,
  privateKeys,
  publicKeys,
  refreshContacts,
  refreshKeys,
  selectContact,
  selectedContact,
  selectPrivateKey,
  selectedPrivateKey,
  setCurrentUser,
  setView,
  view
}: ViewRouterProps) => {
  switch (view) {
    case AppViews.Encrypt:
      return (
        <EncryptView
          currentUser={currentUser}
          privateKeys={privateKeys}
          publicKeys={publicKeys}
          setCurrentUser={setCurrentUser}
        />
      );
    case AppViews.Decrypt:
      return (
        <DecryptView
          currentUser={currentUser}
          privateKeys={privateKeys}
          setCurrentUser={setCurrentUser}
        />
      );
    case AppViews.Keyring:
      return (
        <KeyringView
          privateKeys={privateKeys}
          refreshKeys={refreshKeys}
          selectPrivateKey={selectPrivateKey}
          setView={setView}
        />
      );
    case AppViews.GenerateKey:
      return <GenerateKeyView setView={setView} />;
    case AppViews.KeyDetails:
      return (
        <KeyDetailsView
          privateKey={
            privateKeys.filter(k => k.fingerprint === selectedPrivateKey)[0]
          }
          setView={setView}
        />
      );
    case AppViews.Contacts:
      return (
        <ContactsView
          publicKeys={publicKeys}
          refreshContacts={refreshContacts}
          selectContact={selectContact}
          setView={setView}
        />
      );
    case AppViews.CreateContact:
      return (
        <AddContactView setView={setView} />
      );
    case AppViews.Settings:
      return <SettingsView />;
    default:
      return null;
  }
};

const ViewRouter = ({
  currentUser,
  privateKeys,
  publicKeys,
  refreshContacts,
  refreshKeys,
  selectContact,
  selectedContact,
  selectPrivateKey,
  selectedPrivateKey,
  setCurrentUser,
  setView,
  view
}: ViewRouterProps): JSX.Element => {
  return (
    <View>
      {getView({
        currentUser,
        privateKeys,
        publicKeys,
        refreshContacts,
        refreshKeys,
        selectContact,
        selectedContact,
        selectPrivateKey,
        selectedPrivateKey,
        setCurrentUser,
        setView,
        view
      })}
    </View>
  );
};

export default ViewRouter;
