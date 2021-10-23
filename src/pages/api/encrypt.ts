import { NextApiRequest, NextApiResponse } from "next";
import { encryptString } from "../../services/encryptService";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
	if(req.method !== 'POST') {
		return;
	}
	res.status(200).json({ text: encryptString(req.body.text) });
}