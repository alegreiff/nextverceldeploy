// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

type Response = {
  name: string;
  ok: boolean;
};

import { NextApiRequest, NextApiResponse } from "next";

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Response>
) {
  res.status(200).json({ name: "John Doe", ok: true });
}
