const { client } = require("./connect");

//Creando una nueva persona
const nuevaPersona = async () => {
  const query = {
    text: "INSERT INTO personas (nombre, apellido, edad, bandera) VALUES ($1, $2, $3, $4)",
    values: ["Juan", "Perez", 18, 0],
  };
  const res = client.query(query, (err, res) => {
    if (!err) {
      console.log(res);
    } else {
      console.log(err.stack);
    }
    client.end();
  });
  return res;
};
const res = nuevaPersona();
console.log(res);
