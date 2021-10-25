import gpg from "gpg";

export const genKey = async (userId: string): Promise<string> => {
	return new Promise((resolve, reject) => {
		try {
			gpg.call("",
				[
					"--quick-gen-key", userId,
					'rsa', 'encr', 'never'
				],
				(error: object, privateKey: string) => {
				if (error) {
					console.error(error);
					reject(error);
				}
				console.log(privateKey.toString());
				resolve(privateKey.toString())
			});
		} catch(e) {
			console.error(e);
			reject(e);
		}
	});
};