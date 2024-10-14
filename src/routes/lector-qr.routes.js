import { Router } from "express";
import { buscarHerramientaPorId, cargarHerramientaUsuarioController, devolverHerramientaUsoController, seleccionarHerramientaUsoController } from "../controllers/lector-qr.controller.js";

const LectorQrRouter = Router();

LectorQrRouter.get("/uso/:id_alumno", seleccionarHerramientaUsoController)

LectorQrRouter.get("/herramienta/:id_herramienta", buscarHerramientaPorId)

LectorQrRouter.post("/asignar-herramientas", cargarHerramientaUsuarioController)

LectorQrRouter.post("/devolver-herramientas", devolverHerramientaUsoController)

LectorQrRouter.post("/select-herramienta", buscarHerramientaPorId)

export default LectorQrRouter;
