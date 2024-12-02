export const selectHistorialQuery = `SELECT RHA.*, AL.nombre AS nombre_alumno, AL.apellido AS apellido_alumno, 
HER.nombre AS nombre_herramienta, 
MOV.nombre AS movimiento, 
EST.nombre AS estado
FROM  rel_herramienta_alumno RHA
INNER JOIN alumno AL ON AL.id_alumno = RHA.id_alumno
INNER JOIN herramienta HER ON HER.id_herramienta = RHA.id_herramienta
INNER JOIN movimiento MOV ON MOV.id_movimiento = RHA.id_movimiento
INNER JOIN estado EST ON EST.id_estado = HER.id_estado 
;`;