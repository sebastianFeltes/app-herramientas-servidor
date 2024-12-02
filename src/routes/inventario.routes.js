import { Router } from "express";
import { db } from "../database/index.database.js";

const InventarioRouter = Router();

//controladores
const InventarioController = async (req, res) => {
  const page = req.query.page;
  const items = req.query.items;
  const offset = (page - 1) * items;
  db.all(
    `SELECT * FROM herramienta
    LIMIT ? OFFSET ?`,
    [items, offset],
    async (err, herramientas) => {
      if (err) {
        console.log(err);
        return res.status(500).json({ message: err.message });
      }
      db.get(
        "SELECT COUNT(id_herramienta) AS total FROM herramienta",
        (err, result) => {
          if (err) {
            console.log(err);
            return res.status(500).json({ message: err.message });
          }
          let total_items = result.total;
          return res
            .status(200)
            .json({ herramientas, page, items, total_items });
        }
      );
    }
  );
  //   res.json({ page, items });
};

InventarioRouter.get("/inventario", InventarioController);

export default InventarioRouter;
