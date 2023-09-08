const { client, pool } = require("../utils/DB/connect.js");
client.connect();
/**
 * Guarda un texto que se le mande al log del dia
 * @param {*} texto   El texto que se desea guardar en el log
 */
const imprimirLog = (texto) => {
  const fs = require("fs");
  const today = new Date();
  const date =
    today.getFullYear() + "-" + (today.getMonth() + 1) + "-" + today.getDate();
  fs.appendFile(`logs/${date}.txt`, `${texto} - ${today}\n`, (err) => {
    if (err) {
      throw err;
    }
  });
};

/**
 * Se crea un nuevo cliente y cierra la coneccion con la base de datos
 * El cliente que se crea siempre es el mismo
 */
const nuevaPersona = async () => {
  const query = {
    text: "INSERT INTO personas (nombre, apellido, edad, bandera) VALUES ($1, $2, $3, $4)",
    values: ["Juan", "Perez", 18, 0],
  };

  client.query(query, (err, res) => {
    if (!err) {
      sails.log("Nueva persona creada");
      sails.log(res);
      imprimirLog(
        `Nueva persona creada: {Nombre: ${query.values[0]}, Apellido: ${query.values[1]}, Edad: ${query.values[2]}, Bandera: ${query.values[3]}}`
      );
    } else {
      sails.log(err.stack);
      imprimirLog(`ERROR al crear la persona: ${err.stack}`);
    }
  });
};

/**
 * Se actualizan las personas registrada en la base de datos
 * En este caso solo se le cambia el valor de la bandera
 */
const actualizarPersonas = async () => {
  const query = {
    text: "UPDATE personas SET bandera = 1 WHERE edad >= 18",
    values: [],
  };

  client.query(query, (err, res) => {
    if (!err) {
      sails.log("Personas actualizadas");
      sails.log(res);
      imprimirLog(`Personas actualizadas: {${query.text}}`);
    } else {
      sails.log(err.stack);
      imprimirLog(`ERROR al actualizar las personas: ${err.stack}`);
    }
  });
};

/**
 * Muestra todas las personas que se encuentran en la base de datos
 */
const mostrarPersonas = async () => {
  const query = {
    text: "SELECT * FROM personas",
    values: [],
  };

  client.query(query, (err, res) => {
    if (!err) {
      sails.log("Personas mostradas");
      sails.log(res);
      imprimirLog(`Personas mostradas: ${res.fields}`);
    } else {
      sails.log(err.stack);
      imprimirLog(`ERROR al mostrar las personas: ${err.stack}`);
    }
  });
};

module.exports.cron = {
  myFirtsJob: {
    schedule: "*/5 * * * * *",
    onTick: function () {
      imprimirLog("Cron myFirtsJob iniciado");
      //console.log("Trabajo iniciado");
      sails.log("Trabajo iniciado");
      imprimirLog("Cron myFirtsJob Terminado");
    },
    onComplete: function () {
      console.log("I am triggering when job is complete");
    },
    start: true,
    timezone: "America/Mexico_City",
    context: undefined,
    tunOnInit: true,
  },
  mySecondJob: {
    schedule: "*/10 * * * * *",
    onTick: function () {
      const { client, pool } = require("../utils/DB/connect.js");
      imprimirLog("Cron mySecondJob iniciado");
      sails.log("Segunda tarea cada 10 segundos");
      nuevaPersona();
      imprimirLog("Cron mySecondJob Terminado");
    },
    start: true,
    timezone: "America/Mexico_City",
  },

  ActualizarPersonas: {
    schedule: "*/15 * * * * *",
    onTick: function () {
      imprimirLog("Cron ActualizarPersonas iniciado");
      actualizarPersonas();
      imprimirLog("Cron ActualizarPersonas Terminado");
    },
    start: true,
    timezone: "America/Mexico_City",
  },

  ImprimirPersonas: {
    schedule: "*/20 * * * * *",
    onTick: function () {
      imprimirLog("Cron ImprimirPersonas iniciado");
      mostrarPersonas();
      imprimirLog("Cron ImprimirPersonas Terminado");
    },
    start: true,
    timezone: "America/Mexico_City",
  },
};
