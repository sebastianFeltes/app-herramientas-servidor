import {
  EditarDetalleHerramienta,
  EditarHerramienta,
} from "../database/editar-herramientas.database.js";
import { db } from "../database/index.database.js";

// export async function ObtenerHerramienta(req, res) {
//   const id = req.params.id;
//   console.log(id);

//   db.all(
//     `SELECT HER.*, DET.fecha_ingreso AS fecha_ingreso,
//     DET.fecha_compra AS fecha_compra, DET.origen_fondo_compra AS origen_fondo,
//     DET.estado_ingreso AS estado_ingreso, DET.consumible AS consumible, DET.vida_util AS vida_util,
//     EST.nombre AS estado, CAT.nombre AS categoria
//     FROM herramienta HER
//     INNER JOIN detalle_herramienta DET ON HER.id_herramienta = DET.id_herramienta
//     INNER JOIN estado EST ON HER.id_estado = EST.id_estado
//     INNER JOIN categoria CAT ON HER.id_categoria = CAT.id_categoria
//     WHERE HER.id_herramienta = ?;`,
//     [id],
//     (err, result) => {
//       if (err) {
//         console.log(err);
//         return res.status(500).json({ error: "error en el servidor" });
//       }
//       console.log(result[0]);

//       return res.json(result[0]);
//     }
//   );
// }

export async function EditarHerramientaUsuario(req, res) {
  const {
    nombre,
    marca,
    nro_serie,
    id_categoria,
    id_estado,
    cantidad,
    fecha_compra,
    fecha_carga,
    hora_carga,
    origen_fondo_compra,
    vida_util,
    id_docente,
    consumible,
  } = req.body;

  const id_herramienta = parseInt(req.params.id);
  try {
    db.run(
      EditarHerramienta,
      [
        nombre,
        marca,
        nro_serie,
        id_categoria,
        id_estado,
        cantidad,
        id_herramienta,
      ],
      (err) => {
        if (err) {
          console.log(err);
          return res.json({ message: "error al editar" });
        }
        db.run(
          EditarDetalleHerramienta,
          [
            fecha_carga,
            fecha_compra,
            origen_fondo_compra,
            consumible,
            vida_util,
            id_herramienta,
          ],
          (err) => {
            if (err) {
              console.log(err);
              return res.json({ message: "error al editar" });
            }

            //TODO: EJECUTAR EL RUN PARA GUARDAR EL  MOVIMIENTO DE EDICION DE HERRAMIENTA CON EL ID DEL DOCENTE
          }
        );

        console.log(req.body, req.params);
        res.json({ message: "editado" });
      }
    );
  } catch (error) {
    res.json({ message: "error al editar" });
  }
}
