/* Seleccione la sección con una identificación de contenedor sin usar querySelector. */
let usandoQS = document.querySelector('#container')

/* Seleccione la sección con una identificación de contenedor usando querySelector.*/
let sinUsarQS = document.getElementById('#container')

/* Seleccione toda la lista de elementos con una clase de "second".*/
let elementosSecond = document.querySelectorAll('.second')

/* Seleccione un elemento de la lista con una clase de “third”, pero solo el elemento de la lista dentro de la etiqueta ol.*/
let seleccionarThird = document.querySelector('ol .third')

/* Dar el texto "¡Hola!" a la sección con un ID de contenedor.*/
usandoQS.childNodes[0].textContent = 'Hola!'

/* Agregue la clase “main” al div con una clase ”footer” (cambiar nombre de la clase). */
let cambio = document.getElementsByClassName("footer").className = "main";

/* Crea un nuevo elemento li. */
var li = document.createElement("li");

/* Dale al li el texto "cuatro". */
li.innerHTML="cuatro";

/* Agregue el li al elemento ul. */
let seleccionarUl = document.querySelector('ul')
seleccionarUl.appendChild(li)