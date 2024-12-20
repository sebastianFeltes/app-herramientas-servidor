//QUERYS A LA BASE DE DATOS

//INSERTO EN LA TABLA HERRAMIENTA DE LA BASE DE DATOS CADA DATO DE LA HERRAMIENTA QUE CARGO
export const insertarHerramientaQuery = `
INSERT INTO herramienta 
(nombre, marca, nro_serie, id_categoria, id_estado, cantidad) 
VALUES (?,?,?,?,?,?)
;
`;

//INSERTO EN LA TABLA DETALLE DE HERRAMIENTA DE LA BASE DE DATOS CADA DATO DE LA HERRAMIENTA QUE CARGO
export const insertarDetalleHerramientaQuery = `
  INSERT INTO detalle_herramienta 
  (id_herramienta, fecha_ingreso, fecha_compra, origen_fondo_compra, estado_ingreso, consumible, vida_util) 
  VALUES (?,?,?,?,?,?,?)
  ;
`;

//OBTENGO TODAS LAS CATEGORÍAS DE LA DB
export const selectCategorias = `SELECT * FROM categoria;`;

//OBTENGO LOS ESTADOS DE LA DB
export const selectEstados = `SELECT * FROM estado;`;

// INSERTO LOS DATOS EN LA TABLA RELACION HERRAMIENTA USUARIO
export const insertarRelHerrUsuario = `
  INSERT INTO rel_herramienta_usuario 
  (id_herramienta, id_docente, id_alumno, fecha, hora, id_movimiento) 
  VALUES (?,?,?,?,?,?)
  ;
`;
