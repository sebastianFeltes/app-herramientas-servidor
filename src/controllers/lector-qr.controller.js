import { db } from "../database/index.database.js";
import {
  InsertDevolucionHerramienta,
  InsertRetiroHerramienta,
  InsertUsoHerramienta,
  SelectAlumno,
  SelectHerramienta,
  SelectHerramientaEnUso,
} from "../database/lector-qr.database.js";
import { ObtenerFecha } from "../lib/utils.js";

//Mostrarle al usuario si tiene o no herramientas asignadas
export async function seleccionarHerramientaUsoController(req, res) {
  const { id_alumno } = req.params;

  db.all(SelectHerramientaEnUso, [id_alumno], (err, herramientas) => {
    if (err) {
      console.log(err);
      return res
        .status(500)
        .json({ error: "error al obtener las herramienta" });
    } else {
      if (herramientas.length <= 0) {
        db.all(SelectAlumno, [id_alumno], (err, alumno) => {
          if (err) {
            console.log(err);
            return res
              .status(500)
              .json({ error: "error al obtener las herramienta" });
          }

          return res.json(alumno);
        });
      } else {
        return res.json(herramientas);
      }
    }
  });
}

//Pone en uso la herramienta. Movimiento(2)
export async function cargarHerramientaUsuarioController(req, res) {
  const { herramientas, id_alumno } = req.body;
  const fecha = ObtenerFecha().fecha;
  const hora = ObtenerFecha().hora;
  try {
    herramientas.map((herramienta, index) => {
      db.run(
        InsertUsoHerramienta,
        [herramienta.id_herramienta, null, id_alumno, fecha, hora],
        (err, rows) => {
          if (err) {
            console.log(err);
            return;
          } else {
            db.run(
              InsertRetiroHerramienta,
              [herramienta.id_herramienta, null, id_alumno, fecha, hora],
              (err, rows) => {
                if (err) {
                  return;
                } else {
                  return;
                }
              }
            );
          }
        }
      );
    });
    return res.status(200).json({ message: "Herramientas asignadas" });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: "error al asignar herramienta" });
  }
}

//Carga la devolución (3)
export async function devolverHerramientaUsoController(req, res) {
  const { id_alumno, id_herramienta } = req.body;
  const fecha = ObtenerFecha().fecha;
  const hora = ObtenerFecha().hora;

  db.run(
    InsertDevolucionHerramienta,
    [fecha, hora, id_alumno, id_herramienta],
    (err, rows) => {
      if (err) {
        console.log(err);
        return res.status(500).json({ error: "error al cargar la devolución" });
      } else {
        return res.status(200).json({ message: "Devolución cargada" });
      }
    }
  );
}

export async function buscarHerramientaPorId(req, res) {
  const { id_herramienta } = req.params;

  db.all(SelectHerramienta, [id_herramienta], (err, rows) => {
    if (err) {
      console.log(err);
      return res.status(500).json({ error: "error al obtener la herramienta" });
    } else {
      return res.json(rows);
    }
  });
}
