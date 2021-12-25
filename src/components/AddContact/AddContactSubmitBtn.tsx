import React from "react";
import { Button } from "../Generate/GenerateKeySubmitBtn";
import { executeFetch } from "../../client/ApiClient";

type AddContactSubmitBtnProps = {
  publicKey: string;
};

const AddContactSubmitBtn = ({
  publicKey
}: AddContactSubmitBtnProps): JSX.Element => {
  const [loading, setLoading] = React.useState(false);
  const clickFunc = () => {
    setLoading(true);
    executeFetch("importkey", { publicKey })
      .then((response: Response) => response.json())
      .then(() => setLoading(false));
  };
  return <Button onClick={() => clickFunc()}>{loading ? "..." : "Add"}</Button>;
};

export default AddContactSubmitBtn;
