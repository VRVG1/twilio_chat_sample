const dotenv = require("dotenv");
dotenv.config();
// Download the helper library from https://www.twilio.com/docs/node/install
// Find your Account SID and Auth Token at twilio.com/console
// and set the environment variables. See http://twil.io/secure
const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const client = require("twilio")(accountSid, authToken);

client.conversations.v1
  .conversations("CH55c919027c36406189ac64b5cca865c9")
  .fetch()
  .then((conversation) => console.log(conversation.chatServiceSid));
