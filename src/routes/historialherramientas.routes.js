import { obternerHistorialHerramientas } from "../controllers/historial-herramientas.controllers.js";
import {Router} from 'express';


const historialHerramientasRouter = Router()
// Definimos una ruta GET para obtener todoas las herramientas
historialHerramientasRouter.get('/historial-herramientas', obternerHistorialHerramientas);
 
//  ruta GET para obtener una herramienta por ID
// historialHerramientasRouter.get('/historial-herramientas/:id_herramienta', (req, res) => {
//   const {id_herramienta} = req.params;
//   db.all('SELECT * FROM rel_herramienta_alumno WHERE id = ?', [id_herramienta], (err, results) => {
//     if (err) {
//       console.error('Error al obtener la herramienta:', err);
//       return res.status(500).json({ error: 'Error en la base de datos' });
//     }
//     if (results.length === 0) {
//       return res.status(404).json({ message: 'herramienta no encontrado' });
//     }
//     res.json(results[0]); // Enviamos las herramientas encontradas como respuesta
//   });
// });

export default  historialHerramientasRouter;
