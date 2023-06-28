let btnAgregar = document.querySelector('#btnAñadir')
btnAgregar.addEventListener('click',agregarElemento)

let seleccionarOl = document.querySelector('#lista')

function agregarElemento(e){
    e.preventDefault()
    var texto = document.querySelector('#input-tarea').value
    if(texto.split("")[0] != " "){
        var li = document.createElement("li");
        li.innerHTML = texto
        seleccionarOl.appendChild(li)
    }else{
        alert("Agregue una tarea")
    }
}


let btnEliminar = document.querySelector('#btnBorrar')
btnEliminar.addEventListener('click', eliminarElemento)

function eliminarElemento(e){
    e.preventDefault()
    seleccionarOl.innerHTML = "";
    
}