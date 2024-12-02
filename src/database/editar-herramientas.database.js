//TODO: MODIFICAR EL MODELO DE DATOS, MODIFICAR EL NOMBRE DE LAS TABLAS
export const EditarHerramienta = `UPDATE herramienta 
SET nombre = ? , marca = ?, nro_serie = ?, id_categoria = ?, id_estado = ?, cantidad = ?
WHERE id_herramienta = ?;`

export const EditarDetalleHerramienta = `UPDATE detalle_herramienta
SET fecha_ingreso = ?, fecha_compra = ?, origen_fondo_compra = ?, consumible = ?, vida_util = ?
WHERE id_herramienta = ?;`

export const EditarRelacionHerramientaUsuario = `UPDATE rel_herramienta_alumno
SET id_herramienta = ?, id_docente = ?, fecha = ?, hora = ?, id_moviento = ?
WHERE id_herramienta = ?;`