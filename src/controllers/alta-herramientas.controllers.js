import {
  insertarDetalleHerramientaQuery,
  insertarHerramientaQuery,
  selectCategorias,
  selectEstados,
} from "../database/alta-herramientas.database.js";
import { db } from "../database/index.database.js";

//UNA VEZ QUE SE PASARON LAS VALIDACIONES DEL MIDDLEWARE, CARGA LA HERRAMIENTA EN LA BASE DE DATOS
export async function cargarHerramienta(req, res) {
  const {
    nombre,
    marca,
    categoria,
    consumible,
    numSerie,
    fechaCompra,
    origenHerramienta,
    estadoHerramienta,
    fechaCarga,
    vidaUtil,
  } = req.body;

  // console.log(req.body);
  try {
    db.run(
      insertarHerramientaQuery,
      [
        nombre,
        marca,
        numSerie,
        parseInt(categoria),
        parseInt(estadoHerramienta),
      ],
      (err, row) => {
        if (err) {
          console.log(err);
          return res
            .status(500)
            .json({ message: "error al cargar herramienta" });
        }

        db.all(
          "SELECT MAX(id_herramienta) as id FROM herramienta;",
          (err, id) => {
            if (err) {
              console.log(err);
              return res
                .status(500)
                .json({ message: "error al cargar herramienta" });
            }
            // console.log(id[0].id);

            db.run(
              insertarDetalleHerramientaQuery,
              [
                id[0].id,
                fechaCarga,
                fechaCompra,
                origenHerramienta,
                estadoHerramienta /* es un núm */,
                consumible,
                vidaUtil /* es un núm */,
              ],
              (err, row) => {
                if (err) {
                  console.log(err);
                  return res
                    .status(500)
                    .json({ message: "error al cargar herramienta" });
                }
                res.status(200).json({ message: "herramienta cargada" });
              }
            );
          }
        );
      }
    );
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "error al cargar herramienta" });
  }
}

//FUNCIÓN QUE HACE EL selectCategorias A LA DB Y SOLO RESPONDE,
//SI HAY UN ERROR LO MUESTRA
//SI NO HAY ERRORES DEVUELVE LAS CATEGORÍAS DE LA DB
export async function obtenerCategoria(req, res) {
  db.all(selectCategorias, (err, rows) => {
    if (err) {
      console.log(err.message);
      return res.json({ error: "error al obtener las categorías" });
    }
    // console.log(rows);
    return res.json(rows);
  });
}

//FUNCIÓN QUE HACE EL selectEstados A LA DB Y SOLO RESPONDE,
//SI HAY UN ERROR LO MUESTRA
//SI NO HAY ERRORES DEVUELVE LOS ESTADOS DE LA DB
export async function obtenerEstado(req, res) {
  db.all(selectEstados, (err, rows) => {
    if (err) {
      console.log(err.message);
      return res.json({ error: "error al obtener los estados" });
    }
    // console.log(rows);
    return res.json(rows);
  });
}
