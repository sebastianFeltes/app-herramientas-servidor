import { Router } from "express";
import {
  cargarHerramienta,
  obtenerCategoria,
  obtenerEstado,
} from "../controllers/alta-herramientas.controllers.js";
import { validateHerramienta } from "../middlewares/alta-herramientas.middlewares.js";

const AltaHerramientasRouter = Router();

//CUANDO HAGAN UN POST DE LA HERRAMIENTA PRIMERO EJECUTA validateHerramienta QUE HACE VALIDACIONES DEL
//LADO DEL SERVIDOR, Y LUEGO EJECUTA cargarHerramienta QUE CARGA LA HERRAMIENTA EN LA BASE DE DATOS
AltaHerramientasRouter.post(
  "/herramienta",
  validateHerramienta,
  cargarHerramienta
);

//CUANDO HAGAN UN GET EN LA RUTA /categorias EJECUTA obtenerCategoria
AltaHerramientasRouter.get("/categorias", obtenerCategoria);

//CUANDO HAGAN UN GET EN LA RUTA /estados EJECUTA obtenerEstado
AltaHerramientasRouter.get("/estados", obtenerEstado);

export default AltaHerramientasRouter;
