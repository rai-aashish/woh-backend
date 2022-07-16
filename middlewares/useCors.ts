import { runMiddleware } from "./runMiddleware";
import Cors from "cors";
import { NextApiRequest, NextApiResponse } from "next";
import { origin } from "config/origin";

const cors = Cors({
  methods: ["GET", "HEAD"],
  origin: origin,
});

async function useCors(req: NextApiRequest, res: NextApiResponse) {
  return await runMiddleware(req, res, cors);
}

export { useCors };
