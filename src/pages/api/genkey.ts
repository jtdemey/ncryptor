import { NextApiRequest, NextApiResponse } from "next";
import { genKey } from "../../services/GenKeyService";

export const config = {
  api: {
    externalResolver: true
  }
};

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") {
    return;
  }
  genKey(req.body.userId, req.body.algorithm, req.body.expirationDate)
    .then((privateKey: string) => {
      res.status(200).json({ status: 200, key: privateKey });
    })
    .catch(err => {
      res.status(400).json({ status: 400, text: err.toString() });
    });
}
