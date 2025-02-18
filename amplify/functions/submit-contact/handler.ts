import type { Schema } from "../../data/resource"

type eventType = {
  
}

export const handler: Schema["submitContact"]["functionHandler"] = async (event) => {
  // arguments typed from `.arguments()`
  const { name } = event.arguments


  const accountSid = process.env.ACCOUNT_SID;
  const authToken = process.env.TWILIO_AUTH_TOKEN;
  const client = require('twilio')(accountSid, authToken);

  client.messages
    .create({
      body: 'Hello from Twilio',
      from: process.env.FROM_PHONE_NUMBER,
      to: process.env.TO_PHONE_NUMBER
    })
    .then((message: { sid: string; }) => console.log(message.sid))
    .done();


  // return typed from `.returns()`
  console.log("inside lambda!")
  return `Hello, ${name}!`
}