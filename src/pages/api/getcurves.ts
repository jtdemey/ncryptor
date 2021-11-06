import { NextApiRequest, NextApiResponse } from "next";
import { getCurves } from "../../services/getCurvesService";

export const config = {
	api: {
		externalResolver: true
	}
};

export default function handler(req: NextApiRequest, res: NextApiResponse) {
	if(req.method !== 'GET') {
		return;
	}
	getCurves().then((curves: string) => {
		res.status(200).json({ status: 200, curves });
	}).catch(err => {
		res.status(400).json({ status: 400, text: err.toString() });
	});
}