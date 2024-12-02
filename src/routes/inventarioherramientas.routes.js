import { Router } from "express";
import { filtrarHerramientasController, obtenerHerramientasController } from "../controllers/inventario.controllers.js";
import { db } from "../database/index.database.js";

const inventarioRouter = Router();

inventarioRouter.get("/inventario", obtenerHerramientasController);
inventarioRouter.get("/inventario-filtro",filtrarHerramientasController);

export default inventarioRouter;
