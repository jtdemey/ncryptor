import { NextApiRequest, NextApiResponse } from "next";
import { getPrivateKeys } from "../../services/getPrivateKeysService";

export const config = {
	api: {
		externalResolver: true
	}
};

export default function handler(req: NextApiRequest, res: NextApiResponse) {
	if(req.method !== 'GET') {
		return;
	}
	getPrivateKeys().then((privateKeys: string) => {
		res.status(200).json({ status: 200, keys: privateKeys });
	}).catch(err => {
		res.status(400).json({ status: 400, text: err.toString() });
	});
}