const dotenv = require("dotenv");
dotenv.config();
// Download the helper library from https://www.twilio.com/docs/node/install
// Find your Account SID and Auth Token at twilio.com/console
// and set the environment variables. See http://twil.io/secure
const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const client = require("twilio")(accountSid, authToken);
const conversationSid = "CH1c312469faad4bf0953e70c9f1311d1c";
client.conversations.v1
  .conversations(conversationSid)
  .participants.create({ identity: "yoyezer" })
  .then((participant) => console.log(participant.sid));
