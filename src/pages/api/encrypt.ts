import { NextApiRequest, NextApiResponse } from "next";
import { encryptString } from "../../services/EncryptService";

export const config = {
	api: {
		externalResolver: true
	}
};

export default function handler(req: NextApiRequest, res: NextApiResponse) {
	if(req.method !== 'POST') {
		return;
	}
	encryptString(req.body.userId, req.body.recipient, req.body.text).then((encrypted: string) => {
		res.status(200).json({ status: 200, text: encrypted });
	}).catch(err => {
		res.status(400).json({ status: 400, text: err.toString() });
	});
}