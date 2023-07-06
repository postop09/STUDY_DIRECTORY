// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import CHAMPION from "@/data/champion.json";

type Data = {
  name: string;
  champion: any;
};

export default function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
  res.status(200).json({ name: "John Doe", champion: CHAMPION.data });
}
