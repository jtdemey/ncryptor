import { NextApiRequest, NextApiResponse } from "next";
import { genKey } from "../../services/genKeyService";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
	res.status(200).json({ key: genKey() });
}