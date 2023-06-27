function getFormvalue(nombre,apellido){
    nombre = document.getElementsByName('fname')[0].value
    apellido = document.getElementsByName('lname')[0].value
    console.log(`nombre: ${nombre} apellido: ${apellido}`)
}