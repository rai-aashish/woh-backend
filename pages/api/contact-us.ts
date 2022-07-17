import mailgun from "mailgun-js";
import { NextApiRequest, NextApiResponse } from "next";
import { FormData } from "TYPES/FormData";
import { appUseCors } from "middlewares/appUseCors";
import getEmailTemplate from "backend/components/EmailTemplate";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  // ? run middleware
  await appUseCors(req, res);

  //? Grabbing the the origin of the request method
  //? const { origin } = absoluteUrl(req);

  //? If the request is not from our own frontend site
  // if (origin !== process.env.BASE_URL)
  //   return res.status(401).send({ message: "Unauthorized." });

  //? To handle the request methods correspondingly
  switch (req.method) {
    //For post method ie whenever a user submits its message
    case "POST":
      //Details received from the form
      const {
        _for,
        services,
        name,
        phoneNumber,
        email,
        street,
        suburb,
        postCode,
        message,
      }: FormData = req.body;
      //Mail Body being composed with the data being provided by the user through form
      const emailBody = getEmailTemplate({
        _for,
        services,
        name,
        phoneNumber,
        email,
        street,
        suburb,
        postCode,
        message,
      });

      //Creating the auth object
      const mailGun = () =>
        mailgun({
          apiKey: process.env.MAILGUN_API_KEY as string,
          domain: process.env.MAILGUN_DOMAIN as string,
        });

      //sending the email
      mailGun()
        .messages()
        .send(
          {
            from: "Interested Person <jhon@mg.yourdomain.com>", // sender address
            to: `${process.env.MAILGUN_RECEIVER_EMAIL}`, //email address of the receiver
            subject: "WoH Service Contact", // Subject line
            html: emailBody, // html body
          },
          (error, body) => {
            if (error)
              return res
                .status(500)
                .send({ message: "Error occured while sending your message." });
            else {
              return res.status(200).send({
                message: "Your message has been submitted successfully.",
              });
            }
          }
        );
      break;

    default:
      break;
  }
}
