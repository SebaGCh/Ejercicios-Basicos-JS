alert("Hello World")

document.write("Hello World")
console.log(3+5)

let nombre = prompt("Indica tu nombre")
alert(`Hola ${nombre}`)

let n1 = prompt("Primer Numero")
let n2 = prompt("Segundo Numero")
console.log(`La Suma de ${n1} y ${n2} es = ${parseInt(n1) + parseInt(n2)}`)

function mayorMenor(numeroX, numeroY){
    if(numeroX > numeroY){
        console.log(`El numero mayor es ${numeroX}`)
    }else{
        console.log(`El Numero ${numeroY} es mayor`)
    }
}
mayorMenor(5,3)
mayorMenor(3,8)

function elMayorDeTres(numero1, numero2, numero3){
    console.log(Math.max(numero1, numero2, numero3))
}
elMayorDeTres(4, 7, 8)


var func = (numeroZ) => numeroZ % 2 == 0 ? "Es divisible" : "No es divisible"
console.log(func(8))

function EncuentraLetras(cadena){
    let count = 0
    for(let i = 0; i <= cadena.length; i++){
        if(cadena[i] == "a" || cadena[i] == "A"){
            count ++
        }
    }
    alert(`El numero de veces que se repite 'A' en ${cadena} es ${count}`);
}

EncuentraLetras("Había una vez")
