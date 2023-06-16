const obj = {
    nombre: "Sebastian",
    apellido: "Gonzalez",
    edad: 26,
    direccion: "Independencia"
}

//console.log(obj)

const alumn = {
    nombre: "Juan Miguel",
    promIngles: 9,
    promProgramacion: 8,
    promHtml: 7
}
//console.log(`Nombre del estudiante: ${alumn['nombre']} Promedio de notas: ${(alumn['promIngles']+alumn['promProgramacion']+alumn['promHtml'])/3}`)

const vestido = {
    precio: 10000,
    descuento: 10,
    neto(){
        console.log(`El Precio neto del vestido es: ${this.precio-(this.precio/100*this.descuento)}`)
    }
}
console.log(vestido.neto())
