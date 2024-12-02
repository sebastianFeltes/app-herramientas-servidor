import { Router } from "express";
import { EditarHerramientaUsuario } from "../controllers/editar-herramienta.controllers.js";

const Herramientarouter = Router();

// Herramientarouter.get("/herramienta/:id", ObtenerHerramienta)

Herramientarouter.post("/herramienta/:id", EditarHerramientaUsuario);

export default Herramientarouter;
