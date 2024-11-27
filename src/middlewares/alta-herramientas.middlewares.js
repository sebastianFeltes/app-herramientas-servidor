import { z } from "zod";

//EL MIDDLEWARE HACE LAS VALIDACIONES DEL LADO DEL SERVIDOR

// Define the zod schema for herramienta
const herramientaSchema = z.object({
  nombre: z.string().min(1, "Nombre es requerido"),
  marca: z.string().min(1, "Marca es requerida"),
  categoria: z.number().min(1, "Categoría es requerida"),
  cantidad: z.number().min(1, "Cantidad es requerida"),
  consumible: z.boolean(),
  numSerie: z.string().min(1, "Número de serie es requerido"),
  fechaCompra: z.string().min(1, "Fecha de compra es requerida"),
  origenHerramienta: z.string().optional(),
  estadoHerramienta: z.number().min(1, "Estado de herramienta es requerida"),
  vidaUtil: z.string().optional(),
});

// Middleware function to validate the request body
export const validateHerramienta = (req, res, next) => {
  try {
    herramientaSchema.parse(req.body);
    next();
  } catch (e) {
    res.status(400).json({
      message: "Invalid request body",
      errors: e.errors,
    });
  }
};
