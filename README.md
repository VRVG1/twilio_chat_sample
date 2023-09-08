# test-project

## Como hacer que funcione twilio

Primero que nada, se necesitan crear un archvio .env donde se encuentren las
siguiente variable y ejecuar **npm install** para descargar todas las dependencias

TWILIO_API_KEY="La SID de una API key creada" \
TWILIO_API_SECRET="EL token secreto de la API key creada anteriormente" \
TWILIO_ACCOUNT_SID="Tu SID de la cuenta creada" \
TWILIO_CHAT_SERVICE_SID="LA SID de un chat service creado" \
TWILIO_AUTH_TOKEN="El AUTH token de tu cuenta, se encuentra donde esta tu Account SID" \

## Para provar la conversacion entre dos personas

(Para ejecutar los scripts, se tiene que usar la consola y el comando **node utils/script.js**)

- Primero tiene que crearte una cuenta en codesandbox.
- Hacer un fork del siguiete sandbox [aqui](https://codesandbox.io/s/github/TwilioDevEd/conversations-demo)
- Ir al archivo [creating_access_token](utils/creating_access_token.js)
- Crear dos usuarios, guardar los dos tokens (De preferencia leer todo el script por si existe alguna variable que se tiene que cambiar)
- Ir al archivo [client_initialization](utils/client_initialization.js) y con el token de un usuario ponerlo en la linea 15 y el nombre del otro usuario que se creo anterior mente en la linea 37 (De preferencia leer todo el script por si existe alguna variable que se tiene que cambiar)
- Ir al archivo ConversationsApp.js del demo, se encuentra en src/ConversationsApp.js
- Pegar en la linea 70 el token de los dos usuarios que se creo con anterioridad
- Para el paso anterior tiene que tener dos aplicaciones del codesandbox ejecutadas de manera independiente, de tal manera que en un codesandbox en la linea 70 este el token de un usuario y otro codesandbox en la linea 70 el codigo del segundo usuario.
- Si se realizo correctamente los pasos anteriores, tendira que tener dos apps demo ejecutandose y teniendo dos chats para conversar mutuamente.

  ***

  a [Sails v1](https://sailsjs.com) application

### Links

- [Sails framework documentation](https://sailsjs.com/get-started)
- [Version notes / upgrading](https://sailsjs.com/documentation/upgrading)
- [Deployment tips](https://sailsjs.com/documentation/concepts/deployment)
- [Community support options](https://sailsjs.com/support)
- [Professional / enterprise options](https://sailsjs.com/enterprise)

### Version info

This app was originally generated on Wed Sep 06 2023 08:40:44 GMT-0600 (Central Standard Time) using Sails v1.5.8.
