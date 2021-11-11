import React from "react";
import { PrivateKeyColors } from "../../data/PrivateKeyColors";
import SectionCard from "../Main/SectionCard";
import GenerateKeyBtn from "./GenerateKeyBtn";
import Keyring from "./Keyring";
import NoKeysHeader from "./NoKeysHeader";
import PrivateKeysList from "./PrivateKeysList";

type KeyringViewProps = {
  setView: Function;
};

type PrivateKeysResponse = {
  status: number;
  keys: string;
};

export type PrivateKey = {
  color: string;
  createdDate: string;
  fingerprint: string;
  keyType: string;
  userId: string;
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
      keyColorIndex > PrivateKeyColors.length
        ? 0
        : keyColorIndex + 1;
    parsedKeys.push({
      color,
      createdDate,
      fingerprint,
      keyType,
      userId
    });
    i += 3;
  }
  return {
    ringPath: splitKeys[0],
    keys: parsedKeys,
  };
};

const KeyringView = ({ setView }: KeyringViewProps): JSX.Element => {
  const initialKeys: Array<PrivateKey> = [];
  const [keys, setKeys] = React.useState(initialKeys);
  React.useEffect(() => {
    executeFetch()
      .then((response: Response) => response.json())
      .then((result) => {
        setKeys(parsePrivateKeysResponse(result).keys);
      });
  }, []);
  return (
    <SectionCard>
      <GenerateKeyBtn setView={setView} />
      <Keyring privateKeys={keys} />
      {keys.length < 1 ? (
        <NoKeysHeader />
      ) : (
        <PrivateKeysList privateKeys={keys} />
      )}
    </SectionCard>
  );
};

export default KeyringView;