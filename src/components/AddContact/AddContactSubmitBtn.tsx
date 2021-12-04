import React from "react";
import { Button } from "../Generate/GenerateKeySubmitBtn";

type AddContactSubmitBtnProps = {
  publicKey: string;
};

const executeFetch = (publicKey: string): Promise<Response> =>
  fetch(`${window.location.href}api/importkey`, {
    method: "post",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ publicKey })
  });

const AddContactSubmitBtn = ({
  publicKey
}: AddContactSubmitBtnProps): JSX.Element => {
  const [loading, setLoading] = React.useState(false);
  const clickFunc = () => {
    setLoading(true);
    executeFetch(publicKey)
      .then((response: Response) => response.json())
      .then(() => setLoading(false));
  };
  return (
    <Button onClick={() => clickFunc()}>{loading ? "..." : "Add"}</Button>
  );
};

export default AddContactSubmitBtn;
