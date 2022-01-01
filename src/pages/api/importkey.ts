import { NextApiRequest, NextApiResponse } from "next";
import { importKey } from "../../services/ImportKeyService";

export const config = {
  api: {
    externalResolver: true
  }
};

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") {
    return;
  }
  importKey(req.body.publicKey)
    .then((response: string) => {
      res.status(200).json({ status: 200, response });
    })
    .catch(err => {
      res.status(400).json({ status: 400, text: err?.toString() });
    });
}
