export const selectHerramientas = `SELECT HER.*,DET.*,EST.nombre AS estado,CAT.nombre AS categoria 
FROM herramienta HER 
INNER JOIN detalle_herramienta DET ON HER.id_herramienta=DET.id_herramienta
INNER JOIN estado EST ON HER.id_estado=DET.id_herramienta
INNER JOIN categoria CAT ON HER.id_estado=DET.id_herramienta
`