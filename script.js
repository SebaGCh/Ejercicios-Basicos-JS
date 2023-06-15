/* Escribe un programa de una sola línea que haga que aparezca en la pantalla un alert que diga “Hello World”. (pantalla) */
alert("Hello World")


/* Escribe un programa de una sola línea que escriba en la pantalla un texto que diga “Hello World” (document.write).(pantalla)*/
document.write("Hello World")

/* Escribe un programa de una sola línea que escriba en la pantalla el resultado de sumar 3 + 5.(consola)*/
console.log(3+5)

/* Escribe un programa de dos líneas que pida el nombre del usuario con un prompt y escriba un texto que diga “Hola nombreUsuario”(pantalla) */
let nombre = prompt("Indica tu nombre")
alert(`Hola ${nombre}`)


/* Escribe un programa de tres líneas que pida un número, pida otro número y escriba el resultado de sumar estos dos números.(consola) */
let n1 = prompt("Primer Numero")
let n2 = prompt("Segundo Numero")
console.log(`La Suma de ${n1} y ${n2} es = ${parseInt(n1) + parseInt(n2)}`)


/* Escribe un programa que pida dos números y escriba en la pantalla cual es el mayor.(consola) */
function mayorMenor(numeroX, numeroY){
    if(numeroX > numeroY){
        console.log(`El numero mayor es ${numeroX}`)
    }else{
        console.log(`El Numero ${numeroY} es mayor`)
    }
}
mayorMenor(5,3)
mayorMenor(3,8)


/* Escribe un programa que pida 3 números y escriba en la pantalla el mayor de los tres.(consola) */
function elMayorDeTres(numero1, numero2, numero3){
    console.log(Math.max(numero1, numero2, numero3))
}
elMayorDeTres(4, 7, 8)


/* Escribe un programa que pida un número y diga si es divisible por 2(consola) */
var func = (numeroZ) => numeroZ % 2 == 0 ? "Es divisible" : "No es divisible"
console.log(func(8))


/* Escribe un programa que pida una frase y escriba cuantas veces aparece la letra a(pantalla) */
function EncuentraLetras(cadena){
    let count = 0
    for(let i = 0; i <= cadena.length; i++){
        if(cadena[i] == "a" || cadena[i] == "A"){
            count ++
        }
    }
    alert(`El numero de veces que se repite 'A' en "${cadena}" es ${count}`);
}
EncuentraLetras("Había una vez")
