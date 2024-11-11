import { Router } from "express";
import { ObtenerHerramienta } from "../controllers/editar-herramienta.controllers.js";

const Herramientarouter = Router();

Herramientarouter.get("/herramienta/:id", ObtenerHerramienta)

export default Herramientarouter;
