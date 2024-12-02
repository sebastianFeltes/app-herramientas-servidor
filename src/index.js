import express, { json, urlencoded } from "express";
import cors from "cors";
import { db } from "./database/index.database.js";
import historialHerramientasRouter from "./routes/historialherramientas.routes.js";
import LoginRouter from "./routes/login.routes.js";
// import appRoutes from "./routes/index.routes.js";
import LectorQrRouter from "./routes/lector-qr.routes.js";
import AltaHerramientasRouter from "./routes/alta-herramientas.routes.js";
import inventarioRouter from "./routes/inventarioherramientas.routes.js";
import InventarioRouter from "./routes/inventario.routes.js";
const app = express();

//PUERTO AL QUE ESCUCHA EL SERVIDOR
const port = 4000;

//SETTEO DEL SERVIDOR PARA CORS, PARSEOS Y ENCRIPTACION
app.use(cors());
app.use(json());
app.use(urlencoded());

//IMPORTAR RUTAS
app.use(historialHerramientasRouter);
app.use(LectorQrRouter);
app.use(AltaHerramientasRouter);
app.use(LoginRouter);
app.use(inventarioRouter)
app.use(InventarioRouter);

//EXPOSICION DEL PUERTO
app.listen(port, () => {
  console.log("Servidor escuchando en el puerto 4000");
});
