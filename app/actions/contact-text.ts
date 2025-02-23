"use server"

import twilio from "twilio"
//import { SecretValue } from "aws-cdk-lib";
//import { SecretsManagerClient, GetSecretValueCommand } from "@aws-sdk/sec";
import { SSMClient, GetParametersCommand } from "@aws-sdk/client-ssm";

export type ContactTextType = {
  firstname: string,
  lastname: string,
  phone: string,
  email: string,
  role: string,
  situation: string,
  consentToContact: boolean
}

export async function contactText({
  firstname,
  lastname,
  phone,
  email,
  role,
  situation,
  consentToContact
}: ContactTextType) {

  try {
    const secretClient = new SSMClient({ region: "us-east-2" });
    const input = { // GetParametersRequest
      Names: [ // ParameterNameList // required
        "/amplify/shared/d2q65kbq0mbybg/ACCOUNT_SID",
        "/amplify/shared/d2q65kbq0mbybg/TWILIO_AUTH_TOKEN",
        "/amplify/shared/d2q65kbq0mbybg/FROM_PHONE_NUMBER",
        "/amplify/shared/d2q65kbq0mbybg/TO_PHONE_NUMBER",
      ],
      WithDecryption: true,
    };
    const command = new GetParametersCommand(input);
    const response = await secretClient.send(command);

    if (
      !response.Parameters ||
      response.Parameters.length != 4 ||
      !response.InvalidParameters ||
      response.InvalidParameters.length != 0
    ) {
      return false;
    }

    //console.log(response)

    // /amplify/shared/d2q65kbq0mbybg/ACCOUNT_SID

    // const accountSid = SecretValue.ssmSecure('ACCOUNT_SID');
    // const authToken = SecretValue.ssmSecure('TWILIO_AUTH_TOKEN')
    // const accountSid = secret('ACCOUNT_SID');
    // const authToken = secret('TWILIO_AUTH_TOKEN');
    const accountSid = response.Parameters.find(
      param => param.Name === '/amplify/shared/d2q65kbq0mbybg/ACCOUNT_SID'
    )?.Value as string;

    const authToken = response.Parameters.find(
      param => param.Name === '/amplify/shared/d2q65kbq0mbybg/TWILIO_AUTH_TOKEN'
    )?.Value as string;

    const from_number = response.Parameters.find(
      param => param.Name === '/amplify/shared/d2q65kbq0mbybg/FROM_PHONE_NUMBER'
    )?.Value as string;

    const to_number = response.Parameters.find(
      param => param.Name === '/amplify/shared/d2q65kbq0mbybg/TO_PHONE_NUMBER'
    )?.Value as string;

    const client = twilio(accountSid, authToken);


    const messageToSend = 
    `NEW LEAD from Jake Chunn:
    First name: ${firstname},
    Last name: ${lastname},
    Phone #: ${phone},
    Email: ${email},
    Role: ${role},
    Situation: ${situation},
    Consented to contact?: ${consentToContact}`

    const message = await client.messages
      .create({
        body: messageToSend,
        from: from_number,
        to: to_number
      });

    if (message.errorCode == null) return true;

    console.error('Error submitting contact!-------------------------------------------');
    return false;

  } catch (error) {
    console.error('Error submitting contact:', error);
    return false;
  }
}