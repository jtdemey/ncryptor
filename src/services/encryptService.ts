import gpg from "gpg";

export const encryptString = (text: string) => {
  gpg.encrypt(
    text,
    [
      "--default-key", "thesoapypenguin@gmail.com",
      "--recipient", "thesoapypenguin@gmail.com",
      "--armor",
      "--trust-model", "always"
    ],
    (error: object, encrypted: string) => {
			if(error) {
				console.error(error);
				return error.toString();
			}
			console.log('oasidjf')
      return encrypted;
    }
  );
};