import React from "react";
import styled from 'styled-components';
import DecryptView from "../Decrypt/DecryptView";
import EncryptView from "../Encrypt/EncryptView";
import SettingsView from "../Settings/SettingsView";
import KeychainView from "../Keyring/KeyringView";
import GenerateKeyView from "../Generate/GenerateKeyView";
import ContactsView from "../Contacts/ContactsView";
import { AppViews } from "../../data/AppViews";

type ViewRouterProps = {
	setView: Function,
	view: AppViews
};

const View = styled.div`
	width: 100%;
	height: 100%;
`;

const getView = (currentView: AppViews, setView: Function) => {
	switch(currentView) {
		case AppViews.Encrypt:
			return <EncryptView />;
		case AppViews.Decrypt:
			return <DecryptView />;
		case AppViews.Keychain:
			return <KeychainView setView={setView} />;
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

const ViewRouter = ({ setView, view }: ViewRouterProps): JSX.Element => {
	return (
		<View>
			{getView(view, setView)}
		</View>
	);
};

export default ViewRouter;