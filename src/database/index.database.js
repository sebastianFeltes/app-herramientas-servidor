import sqlite3 from "sqlite3";

//IMPORTAR LA BASE DE DATOS
const db = new sqlite3.Database("../mydb.db");

db.all("SELECT DATE() AS fecha", (error, result) => {
  if (error) {
    throw console.log(error.message);
  }
  return console.log(result[0].fecha);
});

//EXPORTARLA COMO MODULO PARA USARLA EN LOS CONTROLADORES
export {db};