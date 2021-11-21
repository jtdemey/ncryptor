import { NextApiRequest, NextApiResponse } from "next";
import { decryptString } from "../../services/DecryptService";

export const config = {
	api: {
		externalResolver: true
	}
};

export default function handler(req: NextApiRequest, res: NextApiResponse) {
	if(req.method !== 'POST') {
		return;
	}
	decryptString(req.body.userId, req.body.text).then((decrypted: string) => {
		res.status(200).json({ status: 200, text: decrypted });
	}).catch(err => {
		res.status(400).json({ status: 400, text: err.toString() });
	});
}