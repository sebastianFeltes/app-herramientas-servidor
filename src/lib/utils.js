export const ObtenerFecha = ()=>{

    let date = new Date();
    let fechaFormateada = date.toLocaleString();
    let arrayFechaYHora = fechaFormateada.split(",")
    let fecha = arrayFechaYHora[0].trim()
    let hora = arrayFechaYHora[1].trim()


    return {fecha: fecha, hora: hora};
    

}