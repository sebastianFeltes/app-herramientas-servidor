import { db } from "../database/index.database.js";

export async function ObtenerHerramienta(req, res) {
  const id = req.params.id;
  //   console.log(id);

  db.all(
    `SELECT HER.*, DET.fecha_ingreso AS fecha_ingreso, 
    DET.fecha_compra AS fecha_compra, DET.origen_fondo_compra AS origen_fondo,
    DET.estado_ingreso AS estado_ingreso, DET.consumible AS consumible, DET.vida_util AS vida_util,
    EST.nombre AS estado, CAT.nombre AS categoria  
    FROM herramienta HER
    INNER JOIN detalle_herramienta DET ON HER.id_herramienta = DET.id_herramienta 
    INNER JOIN estado EST ON HER.id_estado = EST.id_estado
    INNER JOIN categoria CAT ON HER.id_categoria = CAT.id_categoria
    WHERE HER.id_herramienta = ?;`,
    [id],
    (err, result) => {
      if (err) {
        console.log(err);

        return res.status(500).json({ error: "error en el servidor" });
      }
      res.json(result[0]);
    }
  );
}
