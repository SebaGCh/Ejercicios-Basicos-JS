

const formulario = document.querySelector('#formEnviar')
const boton = document.querySelector('btn-Enviar')

formulario.addEventListener('submit', (e) =>{
    e.preventDefault()
    let nombre = document.querySelector('#nom').value
    let apellido = document.querySelector('#ape').value

    document.querySelector('#saludo').textContent = `Hola ${nombre} ${apellido} gracias por rellenar el formulario`;


})