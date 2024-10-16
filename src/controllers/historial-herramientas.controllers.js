import { selectHistorialQuery } from "../database/historialHerramientas.databases.js";
import {db } from "../database/index.database.js"

export async function obternerHistorialHerramientas(req, res)  {
  db.all( selectHistorialQuery, (err, results) => {
    if (err) {
      console.error('Error al obtener herramienta:', err);
      return res.status(500).json({ error: 'Error en la base de datos' });
    }
    return res.status(200).json(results); // resultados  en formato JSON
  });
}