import React from "react";
import styled from 'styled-components';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCog } from "@fortawesome/free-solid-svg-icons";
import { AppViews } from "../../data/UIConstants";

type SettingsGearProps = {
	setView: Function
};

const Container = styled.div`
	position: absolute;
	top: 1rem;
	right: 1rem;
`;

const SettingsGear = ({ setView }: SettingsGearProps): JSX.Element => (
	<Container onClick={() => setView(AppViews.Settings)}>
		<FontAwesomeIcon icon={faCog} color="#84A98C" width="1.75rem" />
	</Container>
);

export default SettingsGear;