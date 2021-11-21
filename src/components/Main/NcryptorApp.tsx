import React from "react";
import styled from "styled-components";
import { AppViews } from "../../data/AppViews";
import { KeypairColors } from "../../data/KeypairColors";
import { parsePrivateKeysResponse, parsePublicKeysResponse } from "../../utils/ResponseParsers";
import Header from "../Header/Header";
import NavBar from "../Nav/NavBar";
import SettingsGear from "../Nav/SettingsGear";
import ViewRouter from "./ViewRouter";

/*
{"Ash Gray":"cad2c5","Dark Sea Green":"84a98c","Hookers Green":"52796f","Dark Slate Gray":"354f52","Charcoal":"2f3e46"}
*/

export type PrivateKey = {
  color: string;
  createdDate: string;
  fingerprint: string;
  keyType: string;
  userId: string;
};

export type PublicKey = {
  color: string;
  createdDate: string;
  fingerprint: string;
  keyType: string;
	revocationFile: string | undefined;
  userId: string;
};

const executePrivateKeysFetch = (): Promise<Response> =>
  fetch(`${window.location.href}api/getprivatekeys`, {
    method: "get",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  });

const executePublicKeysFetch = (): Promise<Response> =>
  fetch(`${window.location.href}api/getpublickeys`, {
    method: "get",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  });

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
  const [currentUser, setCurrentUser] = React.useState("");
  const initialPrivateKeys: PrivateKey[] = [];
  const [privateKeys, setPrivateKeys] = React.useState(initialPrivateKeys);
  const initialPublicKeys: PublicKey[] = [];
  const [publicKeys, setPublicKeys] = React.useState(initialPublicKeys);
  const [view, setView] = React.useState(AppViews.Encrypt);
  React.useEffect(() => {
    executePrivateKeysFetch()
      .then((response: Response) => response.json())
      .then((result) => {
        const parsedKeys = parsePrivateKeysResponse(result).keys;
        setPrivateKeys(parsedKeys);
        setCurrentUser(parsedKeys[0].userId);
      });
  }, []);
  React.useEffect(() => {
    executePublicKeysFetch()
      .then((response: Response) => response.json())
      .then((result) => {
        const parsedKeys = parsePublicKeysResponse(result).keys;
        setPublicKeys(parsedKeys);
      });
  }, []);
  return (
    <Container>
      <Header />
      <SettingsGear setView={setView} />
      <ViewRouter
        currentUser={currentUser}
        privateKeys={privateKeys}
				publicKeys={publicKeys}
        setCurrentUser={setCurrentUser}
        setView={setView}
        view={view}
      />
      <NavBar setView={setView} />
    </Container>
  );
};

export default NcryptorApp;