/* Initialization */
//Algo de documentacion de twilio
//https://sdk.twilio.com/js/conversations/releases/2.2.0/docs/classes/Client.html
/**
 * Este script crea un nuevo chat y agrega a un usuario al chat
 * - Para este script es necesario que existan como minimo 2 usuarios
 * - Tener el token de acceso para el usuario que va a crear el chat
 * - Tener ya sea la identity del usuario o el SID del usuario (por ejemplo:
 * "Nombre_Del_Nuevo_Usuario") (Ver script creating_access_token.js)
 */
import { Client } from "@twilio/conversations";
import dotenv from "dotenv";
dotenv.config();
const client = new Client(
  "Token del usuario que se creo con el script creating_access_token.js"
);

client.on("stateChanged", async (state) => {
  if (state === "failed") {
    // The client failed to initialize
    console.log("Failed to initialize client");
    console.log(state);
    return;
  }

  if (state === "initialized") {
    // Use the client
    console.log(state);
    console.log("Client initialized");
    // Crear una nueva conversacion
    const res = await client.createConversation({
      attributes: {},
      friendlyName: "Nombre del chat",
      uniqueName: "Nombre clave del chat",
    });
    await res.join();
    await res.add("Nombre_del_usuario_con_el_que_se_va_a_conectar");
    await res.sendMessage("Hola mundo");
    // Si se desea salir de la conversacion
    // Es necesario usar el siguiente codigo
    // await res.leave();
    // Advertencia, el chat nunca se elimina, no se como hacer para reentrar
    // en un chat ya existente.
    // El codigo de abajo verifica lo que pasa en la conversacion, pero no funciona

    // res.on("participantJoined", async (participant) => {
    //   console.log("Participant: " + participant);
    //   let participantList = res.getParticipants();
    //   console.log("Participant List: " + participantList);

    //   let messagesPaginator = await res.getMessages(30, 0, "backwards");
    //   console.log(messagesPaginator);
    //   const message = messagesPaginator.items;
    //   console.log(message);

    //   let conversationsPaginator = await client.getSubscribedConversations();
    //   console.log(conversationsPaginator);
    //   const conversation = conversationsPaginator.items;
    //   console.log(conversation);
    // });
  }
});
