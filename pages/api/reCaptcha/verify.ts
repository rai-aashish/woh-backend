import type { NextApiRequest, NextApiResponse } from "next";
import axios from "axios";
import { appUseCors } from "middlewares/appUseCors";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  await appUseCors(req, res);

  if (req.method !== "POST")
    return res.status(404).json({ message: "This method is not found" });

  const { token } = req.body;
  const response = await axios.post(
    `https://www.google.com/recaptcha/api/siteverify?secret=${process.env.RECAPTCHA_SECRET_KEY}&response=${token}`
  );

  //send response after verification
  if (response.status == 200) {
    res.status(200).json({ human: true });
  } else {
    res.status(200).json({ human: false });
  }
}
