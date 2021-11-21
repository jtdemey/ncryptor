import { NextApiRequest, NextApiResponse } from "next";
import { getPublicKeys } from "../../services/GetPublicKeysService";

export const config = {
	api: {
		externalResolver: true
	}
};

export default function handler(req: NextApiRequest, res: NextApiResponse) {
	if(req.method !== 'GET') {
		return;
	}
	getPublicKeys().then((publicKeys: string) => {
		res.status(200).json({ status: 200, keys: publicKeys });
	}).catch((err: Error) => {
		res.status(400).json({ status: 400, text: err.toString() });
	});
}