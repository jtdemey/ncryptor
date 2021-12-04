import React from "react";
import styled from "styled-components";
import { AppViews } from "../../data/AppViews";
import {
  selectContact,
  selectPrivateKey,
  setCurrentUser,
  setPrivateKeys,
  setPublicKeys,
  setView
} from "../../state/Actions";
import { initialState, reducer } from "../../state/Reducer";
import {
  KeysResponse,
  parsePrivateKeysResponse,
  parsePublicKeysResponse
} from "../../utils/ResponseParsers";
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
  expirationDate?: string;
  fingerprint: string;
  keyType: string;
  userId: string;
};

export type PublicKey = {
  color: string;
  createdDate: string;
  expirationDate?: string;
  fingerprint: string;
  keyType: string;
  revocationFile: string | undefined;
  userId: string;
};

const Container = styled.div`
	display: grid;
	grid-template-rows: 3.5rem 1fr 106px;
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

const executeGetRequest = (endpoint: string): Promise<Response> =>
  fetch(`${window.location.href}api/${endpoint}`, {
    method: "get",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json"
    }
  });

const executePrivateKeysFetch = (): Promise<Response> =>
  executeGetRequest("getprivatekeys");

const executePublicKeysFetch = (): Promise<Response> =>
  executeGetRequest("getpublickeys");

const NcryptorApp = (): JSX.Element => {
  const [state, dispatch] = React.useReducer(reducer, initialState);
  const dispatchSetView = (view: AppViews) => dispatch(setView(view));
  const refreshPrivateKeys = (): void => {
    executePrivateKeysFetch()
      .then((response: Response) => response.json())
      .then((result: KeysResponse) => {
        const parsedKeys = parsePrivateKeysResponse(result).keys;
        dispatch(setPrivateKeys(parsedKeys));
        dispatch(setCurrentUser(parsedKeys[0].userId));
      });
  };
  React.useEffect(() => refreshPrivateKeys(), []);
	const refreshContacts = (): void => {
    executePublicKeysFetch()
      .then((response: Response) => response.json())
      .then((result: KeysResponse) =>
        dispatch(setPublicKeys(parsePublicKeysResponse(result).keys))
      );
	};
  React.useEffect(() => refreshContacts(), []);
  return (
    <Container>
      <Header />
      <SettingsGear setView={dispatchSetView} />
      <ViewRouter
        currentUser={state.currentUser}
        privateKeys={state.privateKeys}
        publicKeys={state.publicKeys}
				refreshContacts={refreshContacts}
				refreshKeys={refreshPrivateKeys}
        selectContact={(fingerprint: string) =>
          dispatch(selectContact(fingerprint))
        }
        selectedContact={state.selectedContact}
        selectPrivateKey={(fingerprint: string) => {
          dispatch(selectPrivateKey(fingerprint));
          dispatch(setView(AppViews.KeyDetails));
        }}
        selectedPrivateKey={state.selectedPrivateKey}
        setCurrentUser={(userId: string) => dispatch(setCurrentUser(userId))}
        setView={dispatchSetView}
        view={state.view}
      />
      <NavBar view={state.view} setView={dispatchSetView} />
    </Container>
  );
};

export default NcryptorApp;
