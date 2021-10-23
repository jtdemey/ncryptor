import gpg from "gpg";

export const genKey = () => {
  gpg.call("", ["--full-gen-key"], (error: object, privateKey: string) => {
    if (error) {
      console.error(error);
      return error.toString();
    }
    console.log(privateKey);
    return privateKey;
  });
};
