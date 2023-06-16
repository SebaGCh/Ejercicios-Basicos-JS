const arr = [1,2,3,4,5,6,7,8,9,10]
console.log(arr);

let amigos = ["pedro","maria", "joan", "pili"]
console.log(`mis amigos son ${amigos[1]} y ${amigos[2]}`)

const meses = ["enero","febrero","marzo","abril","mayo","junio","julio","agosto","septiembre","octubre","noviembre","diciembre"]
let mesUsuario = window.prompt("Ingrese un numero entre 0 y 11");
alert(`El mes que seleccionaste es ${meses[mesUsuario]}`)

function sumaLista(arreglo){
    let count = 0;
    for(let i = 0; i < arreglo.length; i++){
        count+=arreglo[i]
    }
    console.log(count)
}
sumaLista([2,4,5,1,2])