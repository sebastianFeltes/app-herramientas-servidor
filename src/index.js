import express, { json, urlencoded } from "express";
import cors from "cors";
import { db } from "./database/index.database.js";
import AltaHerramientasRouter from "./routes/alta-herramientas.routes.js";
// import appRoutes from "./routes/index.routes.js";

const app = express();

//PUERTO AL QUE ESCUCHA EL SERVIDOR
const port = 4000;

//SETTEO DEL SERVIDOR PARA CORS, PARSEOS Y ENCRIPTACION
app.use(cors());
app.use(json());
app.use(urlencoded());

//IMPORTAR RUTAS
app.use(AltaHerramientasRouter);

//EXPOSICION DEL PUERTO
app.listen(port, () => {
  console.log("Servidor escuchando en el puerto 4000");
});
