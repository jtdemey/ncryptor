import React from "react";
import styled from 'styled-components';
import DecryptView from "../Decrypt/DecryptView";
import EncryptView from "../Encrypt/EncryptView";
import SettingsView from "../Settings/SettingsView";
import { AppViews } from "../../data/UIConstants";

type ViewRouterProps = {
	view: AppViews
};

const View = styled.div`
	width: 100%;
	height: 100%;
`;

const getView = (currentView: AppViews) => {
	switch(currentView) {
		case AppViews.Encrypt:
			return <EncryptView />;
		case AppViews.Decrypt:
			return <DecryptView />;
		case AppViews.Settings:
			return <SettingsView />;
		default:
			return null;
	}
};

const ViewRouter = ({ view }: ViewRouterProps): JSX.Element => {
	return (
		<View>
			{getView(view)}
		</View>
	);
};

export default ViewRouter;