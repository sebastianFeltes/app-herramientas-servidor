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

  console.log(req.body);
  db.run(
    insertarHerramientaQuery,
    [nombre, marca, numSerie, parseInt(categoria), parseInt(estadoHerramienta)],
    (err, row) => {
      if (err) {
        console.log(err);
        res.json({ error: err.message });
      }
      return;
    }
  );

  db.all("SELECT MAX(id_herramienta) as id FROM herramienta;", (err, row) => {
    if (err) {
      console.log(err);
      res.json({ error: err.message });
    }
    console.log(row[0].id);

    db.run(
      insertarDetalleHerramientaQuery,
      [
        row[0].id,
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
          res.json({ error: err.message });
        }
        return res.json(row);
      }
    );
    return row;
  });

  res.json({ message: "herramienta cargada" });
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

    console.log(rows);

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
    console.log(rows);

    return res.json(rows);
  });
}
