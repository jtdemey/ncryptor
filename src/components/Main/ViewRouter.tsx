import React from 'react';
import styled from 'styled-components';
import DecryptView from '../Decrypt/DecryptView';
import EncryptView from '../Encrypt/EncryptView';
import SettingsView from '../Settings/SettingsView';
import KeyringView from '../Keyring/KeyringView';
import GenerateKeyView from '../Generate/GenerateKeyView';
import ContactsView from '../Contacts/ContactsView';
import { AppViews } from '../../data/AppViews';
import { PrivateKey, PublicKey } from './NcryptorApp';

type ViewRouterProps = {
  currentUser: string;
  privateKeys: PrivateKey[];
  publicKeys: PublicKey[];
  setCurrentUser: Function;
  setView: Function;
  view: AppViews;
};

const View = styled.div`
  width: 100%;
  height: 100%;
`;

const getView = ({
  currentUser,
  privateKeys,
  publicKeys,
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
      return <KeyringView setView={setView} />;
    case AppViews.Contacts:
      return <ContactsView />;
    case AppViews.Settings:
      return <SettingsView />;
    case AppViews.GenerateKey:
      return <GenerateKeyView setView={setView} />;
    default:
      return null;
  }
};

const ViewRouter = ({
  currentUser,
  privateKeys,
  publicKeys,
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
        setCurrentUser,
        setView,
        view
      })}
    </View>
  );
};

export default ViewRouter;