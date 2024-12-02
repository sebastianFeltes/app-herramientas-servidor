import { db } from "../database/index.database.js";
import { selectHerramientas } from "../database/inventario.database.js";

export async function obtenerHerramientasController(req, res) {
  const page = req.query.page;
  const items = req.query.items;
  const offset = (page - 1) * items;
  db.all(
    "SELECT * FROM herramienta LIMIT ? OFFSET ?;",
    [items, offset],
    (err, herramientas) => {
      if (err) {
        console.log(err);
        return res.status(500).json({ message: err.message });
      }
      return res.status(200).json({ herramientas, page, items });
    }
  );
}
export async function filtrarHerramientasController(req, res) {
  const page = req.query.page;
  const items = req.query.items;
  const filtro = req.query.filtro;
  const filtroFormateado = `%${filtro.toLowerCase()}%`;
  const offset = (page - 1) * items;
  db.all(
    `SELECT HER.* FROM herramienta HER
      INNER JOIN categoria CAT ON CAT.id_categoria=HER.id_categoria
      INNER JOIN estado EST ON EST.id_estado=HER.id_estado
      WHERE HER.nombre LIKE ? OR HER.nro_serie LIKE ? OR HER.marca LIKE ? OR
     CAT.nombre  LIKE ? OR EST.nombre LIKE ?
      LIMIT ? OFFSET ?;`,
    [
      filtroFormateado,
      filtroFormateado,
      filtroFormateado,
      filtroFormateado,
      filtroFormateado,
      items,
      offset,
    ],
    (err, herramientas) => {
      if (err) {
        console.log(err);
        return res.status(500).json({ message: err.message });
      }
      return res.status(200).json({ herramientas, page, items });
    }
  );
}
