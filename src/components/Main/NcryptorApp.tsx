import React from "react";
import styled from "styled-components";
import { AppViews } from "../../data/AppViews";
import {
  setCurrentUser,
  setPrivateKeys,
  setPublicKeys,
  setView
} from "../../state/Actions";
import { AppAction, initialState, reducer } from "../../state/Reducer";
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

const executePrivateKeysFetch = (): Promise<Response> =>
  fetch(`${window.location.href}api/getprivatekeys`, {
    method: "get",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json"
    }
  });

const executePublicKeysFetch = (): Promise<Response> =>
  fetch(`${window.location.href}api/getpublickeys`, {
    method: "get",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json"
    }
  });

const NcryptorApp = (): JSX.Element => {
  const [state, dispatch] = React.useReducer(reducer, initialState);
  const dispatchSetView = (view: AppViews) => dispatch(setView(view));
  const refreshPrivateKeys = (): void => {
    executePrivateKeysFetch()
      .then((response: Response) => response.json())
      .then(result => {
        const parsedKeys = parsePrivateKeysResponse(result).keys;
        dispatch(setPrivateKeys(parsedKeys));
        dispatch(setCurrentUser(parsedKeys[0].userId));
      });
  };
  React.useEffect(() => refreshPrivateKeys(), []);
  React.useEffect(() => {
    executePublicKeysFetch()
      .then((response: Response) => response.json())
      .then(result =>
        dispatch(setPublicKeys(parsePublicKeysResponse(result).keys))
      );
  }, []);
  return (
    <Container>
      <Header />
      <SettingsGear setView={dispatchSetView} />
      <ViewRouter
        currentUser={state.currentUser}
        privateKeys={state.privateKeys}
        publicKeys={state.publicKeys}
				selectedContact={state.selectedContact}
				selectedPrivateKey={state.selectedPrivateKey}
        setCurrentUser={(userId: string) => dispatch(setCurrentUser(userId))}
        setView={dispatchSetView}
        view={state.view}
      />
      <NavBar setView={dispatchSetView} />
    </Container>
  );
};

export default NcryptorApp;