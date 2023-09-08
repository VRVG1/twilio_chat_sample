/**
 * Este script crea un nuevo usuario y un token de acceso del usuario
 *  */

const AccessToken = require("twilio").jwt.AccessToken;
const ChatGrant = AccessToken.ChatGrant;
const dotenv = require("dotenv");
dotenv.config();
// Used when generating any kind of tokens
// To set up environmental variables, see http://twil.io/secure
const twilioAccountSid = process.env.TWILIO_ACCOUNT_SID;
const twilioApiKey = process.env.TWILIO_API_KEY;
const twilioApiSecret = process.env.TWILIO_API_SECRET;

// Used specifically for creating Chat tokens
const serviceSid = process.env.TWILIO_CHAT_SERVICE_SID;
const identity = "Nombre_Del_Nuevo_Usuario";

// Create a "grant" which enables a client to use Chat as a given user,
// on a given device
const chatGrant = new ChatGrant({
  serviceSid: serviceSid,
});

// Create an access token which we will sign and return to the client,
// containing the grant we just created
const token = new AccessToken(twilioAccountSid, twilioApiKey, twilioApiSecret, {
  identity: identity,
});

token.addGrant(chatGrant);

// Serialize the token to a JWT string
//console.log(token);
console.log(token.toJwt());
