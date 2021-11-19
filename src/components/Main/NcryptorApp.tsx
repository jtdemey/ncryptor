import React from "react";
import styled from "styled-components";
import { AppViews } from "../../data/AppViews";
import { PrivateKeyColors } from "../../data/PrivateKeyColors";
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

type PrivateKeysResponse = {
  status: number;
  keys: string;
};

const executeFetch = (): Promise<Response> =>
  fetch(`${window.location.href}api/getprivatekeys`, {
    method: "get",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  });

const parsePrivateKeysResponse = ({
  status,
  keys,
}: PrivateKeysResponse): { ringPath: string; keys: Array<PrivateKey> } => {
  if (status !== 200) {
    console.error(`Error ${status} getting keyring`);
  }
  if (!keys) {
    return { ringPath: "N/A", keys: [] };
  }
  const parsedKeys: PrivateKey[] = [];
  const splitKeys = keys.split("\n");
  let keyColorIndex = 0;
  for (let i = 2; i < splitKeys.length; i++) {
    const metaLine = splitKeys[i].split(" ");
    if (metaLine[0] !== "sec") continue;
    const keyType = metaLine[3] || "unknown";
    const createdDate = metaLine[4] || "unknown";
    const fingerprint = splitKeys[i + 1]?.trim();
    const userIdLine = splitKeys[i + 2].split(" ");
    const userId = userIdLine[userIdLine.length - 1] || "unknown";
    const color = PrivateKeyColors[keyColorIndex].value;
    keyColorIndex =
      keyColorIndex > PrivateKeyColors.length ? 0 : keyColorIndex + 1;
    parsedKeys.push({
      color,
      createdDate,
      fingerprint,
      keyType,
      userId,
    });
    i += 3;
  }
  return {
    ringPath: splitKeys[0],
    keys: parsedKeys,
  };
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

const NcryptorApp = (): JSX.Element => {
  const [currentUser, setCurrentUser] = React.useState("");
  const initialKeys: PrivateKey[] = [];
  const [privateKeys, setPrivateKeys] = React.useState(initialKeys);
  const [view, setView] = React.useState(AppViews.Encrypt);
  React.useEffect(() => {
    executeFetch()
      .then((response: Response) => response.json())
      .then((result) => {
        const parsedKeys = parsePrivateKeysResponse(result).keys;
        setPrivateKeys(parsedKeys);
        setCurrentUser(parsedKeys[0].userId);
      });
  }, []);
  return (
    <Container>
      <Header />
      <SettingsGear setView={setView} />
      <ViewRouter
        currentUser={currentUser}
        privateKeys={privateKeys}
        setCurrentUser={setCurrentUser}
        setView={setView}
        view={view}
      />
      <NavBar setView={setView} />
    </Container>
  );
};

export default NcryptorApp;