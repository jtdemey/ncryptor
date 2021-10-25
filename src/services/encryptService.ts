import gpg from "gpg";

export const encryptString = async (text: string): Promise<string> => {
	return new Promise((resolve, reject) => {
		try {
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
						reject(error);
					}
					console.log('oasidjf')
					resolve(encrypted);
				}
			);
		} catch(e) {
			console.error(e);
			reject(e);
		}
	});
};