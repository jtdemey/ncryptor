import { PrivateKey, PublicKey } from '../components/Main/NcryptorApp';
import { KeypairColors } from '../data/KeypairColors';

export type KeysResponse = {
  status: number;
  keys: string;
};

const parseResponseBody = (keys: string): { keys: any[]; ringPath: string } => {
  const parsedKeys: any[] = [];
  const splitKeys = keys.split('\n');
  let keyColorIndex = 0;
  for (let i = 2; i < splitKeys.length; i++) {
    const metaLine = splitKeys[i].split(' ');
    if (metaLine[0] !== 'sec' && metaLine[0] !== 'pub') continue;
    const keyType = metaLine[3] || 'unknown';
    const createdDate = metaLine[4] || 'unknown';
    const fingerprint = splitKeys[i + 1]?.trim();
    const userIdLine = splitKeys[i + 2].split(' ');
    const userId = userIdLine[userIdLine.length - 1] || 'unknown';
    const color = KeypairColors[keyColorIndex].value;
    keyColorIndex =
      keyColorIndex > KeypairColors.length ? 0 : keyColorIndex + 1;
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
    keys: parsedKeys,
    ringPath: splitKeys[0]
  };
};

export const parsePrivateKeysResponse = ({
  status,
  keys
}: KeysResponse): { keys: Array<PrivateKey>; ringPath: string } => {
  if (status !== 200) {
    console.error(`Error ${status} getting private keys from keyring`);
  }
  if (!keys) {
    return { ringPath: 'N/A', keys: [] };
  }
  const parsedKeys = parseResponseBody(keys);
  return {
    keys: parsedKeys.keys,
    ringPath: parsedKeys.ringPath
  };
};

export const parsePublicKeysResponse = ({
  status,
  keys
}: KeysResponse): { keys: Array<PublicKey>; ringPath: string } => {
  if (status !== 200) {
    console.error(`Error ${status} getting public keys from keyring`);
  }
  if (!keys) {
    return { ringPath: 'N/A', keys: [] };
  }
  const parsedKeys = parseResponseBody(keys);
  return {
    keys: parsedKeys.keys,
    ringPath: parsedKeys.ringPath
  };
};