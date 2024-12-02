// Scanea el codigo usuario y el sistema devuelve si tiene o no herramientas, las que tienen estado o mov (2).
export const SelectHerramientaEnUso = `SELECT HER.*, ALU.nombre AS nombre_alumno, ALU.apellido AS apellido_alumno FROM rel_herramienta_alumno RHA 
INNER JOIN herramienta HER ON RHA.id_herramienta = HER.id_herramienta
INNER JOIN alumno ALU ON RHA.id_alumno = ALU.id_alumno
WHERE ALU.id_alumno = ? AND RHA.id_movimiento = 2`;

export const SelectAlumno = `SELECT ALU.nombre AS nombre_alumno, ALU.apellido AS apellido_alumno FROM alumno ALU
WHERE ALU.id_alumno = ?`;

//El usuario scanea una herramienta

//Si la herramienta NO está asignada, pasa a estar en uso, movimiento (2).
export const InsertRetiroHerramienta = `INSERT INTO rel_herramienta_alumno 
(id_herramienta, id_alumno, fecha, hora, id_movimiento) VALUES (?, ?, ?, ?, 1);
`;
//También se asigna el retiro, mov (1)
export const InsertUsoHerramienta = `INSERT INTO rel_herramienta_alumno  
(id_herramienta, id_alumno, fecha, hora, id_movimiento) VALUES (?, ?, ?, ?, 2);
`;
//Si la herramienta está asignada a esa persona, pasa a ser del movimiento 2 (Uso) al 3 (Devolución).

export const InsertDevolucionHerramienta = `UPDATE rel_herramienta_alumno 
SET id_movimiento = 3, fecha = ?, hora = ?
WHERE id_alumno = ? AND id_herramienta = ? AND id_movimiento = 2;
`;
//Por último el usuario scanea su código nuevamente para cerrar la transacción.

export const SelectHerramienta = `SELECT HER.*, DET.fecha_ingreso AS fecha_ingreso, 
    DET.fecha_compra AS fecha_compra, DET.origen_fondo_compra AS origen_fondo,
    DET.estado_ingreso AS estado_ingreso, DET.consumible AS consumible, DET.vida_util AS vida_util,
    EST.nombre AS estado, CAT.nombre AS categoria  
    FROM herramienta HER
    INNER JOIN detalle_herramienta DET ON HER.id_herramienta = DET.id_herramienta 
    INNER JOIN estado EST ON HER.id_estado = EST.id_estado
    INNER JOIN categoria CAT ON HER.id_categoria = CAT.id_categoria
    WHERE HER.id_herramienta = ?;`;
