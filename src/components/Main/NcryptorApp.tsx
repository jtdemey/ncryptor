import React from "react";
import styled from "styled-components";
import { AppViews } from "../../data/AppViews";
import Header from "../Header/Header";
import NavBar from "../Nav/NavBar";
import SettingsGear from "../Nav/SettingsGear";
import ViewRouter from "./ViewRouter";

/*
{"Ash Gray":"cad2c5","Dark Sea Green":"84a98c","Hookers Green":"52796f","Dark Slate Gray":"354f52","Charcoal":"2f3e46"}
*/

const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: radial-gradient(
    ellipse at 65% 35%,
    rgba(73, 107, 111, 1) 0%,
    rgba(53, 79, 82, 1) 45%,
    rgba(47, 62, 70, 1) 100%
  );
`;

const NcryptorApp = (): JSX.Element => {
	const [view, setView] = React.useState(AppViews.Encrypt);
	return (
		<Container>
			<Header />
			<SettingsGear setView={setView} />
			<ViewRouter setView={setView} view={view} />
			<NavBar setView={setView} />
		</Container>
	);
};

export default NcryptorApp;