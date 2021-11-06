import React from "react";
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

type PrivateKey = {
	createdDate: string;
	keyType: string;
	fingerprint: string;
	userId: string;
};

const privateKeys: Array<string> = [];

const executeFetch = (): Promise<Response> =>
  fetch(`${window.location.href}api/getprivatekeys`, {
    method: "get",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  });

const parsePrivateKeysResponse = ({ status, keys }: PrivateKeysResponse) => {
  if (status !== 200) {
    console.error(`Error ${status} getting keyring`);
  }
  if (!keys) return;
	console.log(keys.split('\n'))
	const splitKeys = keys.split('\n');
	for (let i = 2; i < splitKeys.length; i++) {
		
	}
	return {
		ringPath: splitKeys[0],
		keys: []
	};
};

const KeyringView = ({ setView }: KeyringViewProps): JSX.Element => {
  React.useEffect(() => {
    executeFetch()
      .then((response: Response) => response.json())
      .then((result) => {
        console.log(parsePrivateKeysResponse(result));

      });
  });
  return (
    <SectionCard>
      <GenerateKeyBtn setView={setView} />
      <Keyring />
      {privateKeys.length < 1 ? (
        <NoKeysHeader />
      ) : (
        <PrivateKeysList privateKeys={privateKeys} />
      )}
    </SectionCard>
  );
};

export default KeyringView;