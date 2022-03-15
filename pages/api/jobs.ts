// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import axios from "axios";
import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  positions?: any[];
  error?: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  try {
    const { data } = await axios.get(
      "https://www.arbeitnow.com/api/job-board-api"
    );
    res.status(200).json({ positions: data.data });
  } catch (err) {
    res.status(500).json({ error: "Oops, something happened" });
  }
}
