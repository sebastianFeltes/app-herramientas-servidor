import { db } from "../database/index.database.js";
import { SelectDocente } from "../database/login.database.js";
import bcrypt from "bcryptjs";

export async function intentarLogin(req, res) {
  const { dni , password} = req.body;


  db.all(SelectDocente, [dni], (err, row) => {
    if (err) {
      return res.json({ error: "Error al buscar usuario" });
    }
    let usuario = row[0];
    if (!usuario) {
      return res.json({ message: "Usuario no encontrado" });
    } else {
      const match = bcrypt.compareSync(password, usuario.password);
      if (match) {
        return res.status(200).json({
          nombre: usuario.nombre,
          dni: usuario.dni,
          apellido: usuario.apellido,
        });
      } else {
        return res.json({ message: "Contraseña invalida" });
      }
    }
  });
}
