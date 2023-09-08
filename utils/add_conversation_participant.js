//SMS only
const dotenv = require("dotenv");
dotenv.config();
// Download the helper library from https://www.twilio.com/docs/node/install
// Find your Account SID and Auth Token at twilio.com/console
// and set the environment variables. See http://twil.io/secure
const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const client = require("twilio")(accountSid, authToken);
const conversationSid = process.env.CONVERSATION_SID;
client.conversations.v1
  .conversations(conversationSid)
  .participants.create({
    "messagingBinding.address": "+52 341 1053960",
    "messagingBinding.proxyAddress": "+1 253 352 3745",
  })
  .then((participant) => console.log(participant.sid));
