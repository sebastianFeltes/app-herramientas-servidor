import express, { json, urlencoded } from "express";
import cors from "cors";

const app = express();

//PUERTO AL QUE ESCUCHA EL SERVIDOR
const port = 4000;

//SETTEO DEL SERVIDOR PARA CORS, PARSEOS Y ENCRIPTACION
app.use(cors());
app.use(json());
app.use(urlencoded())

app.listen(port, () => {
  console.log("Servidor escuchando en el puerto 4000");
});