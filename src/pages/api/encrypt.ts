import { NextApiRequest, NextApiResponse } from "next";
import { encryptString } from "../../services/encryptService";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
	if(req.method !== 'POST') {
		return;
	}
	encryptString(req.body.text).then((encrypted: string) => {
		res.status(200).json({ status: 200, text: encrypted });
	}).catch(err => {
		res.status(400).json({ status: 400, text: err.toString() });
	});
}