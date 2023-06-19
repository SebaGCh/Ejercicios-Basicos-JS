/* Ejercicio #1
Crea una función llamada numeroMayor() que toma tres números como entrada y retornar el número mayor de ellos, si son iguales, devolver un String «Los números son iguales».
 */
let numeroMayor = (num1, num2, num3) => 
num1 === num3 && num2 === num3 ?
"Los numeros son iguales" :
Math.max(num1,num2,num3);
//console.log(numeroMayor(6,5,5))

/* Ejercicio #2
Escriba una función con el nombre de esVocal() que tome un carácter, devuelva True si es vocal (no importa si es mayúscula o minúscula), y devuelva False en caso contrario. */

let reg=/[aeiou]/gmi
let esVocal = (letra) =>
reg.test(letra);
//console.log(esVocal("r"))

/* Ejercicio #3
Crea una función llamada generar_caracteres() que tome como parámetro un número entero (n) y un carácter, retornar el carácter multiplicado por n. Por ejemplo, generar_caracteres(5,x), debería retornar “String” «xxxxx». */

let generar_caracteres = (n,c) =>
c.repeat(n);
//console.log(generar_caracteres(5,"x"))

/* Ejercicio #4
Crear una función sumaArreglo() que tome como parámetro un arreglo de números, retornar la longitud del arreglo + la suma de todos los números del arreglo. */

let sumaArreglo = (arreglo) => {
    let total = 0;
    arreglo.forEach(element => total+=element)
    return total
}
//console.log(sumaArreglo([1,2,3]))

/* Ejercicio #5
Crear una función multiplicarArreglo() que tome como parámetro un arreglo de números, retornar la multiplicación del número menor del arreglo y el número mayor del arreglo. */
let multiplicarArreglo = (arr) => {
    let contador =1;
    arr.forEach(element => contador *= element)
    return contador
}
//console.log(multiplicarArreglo([2,2,2]))

/* Ejercicio #6
Crear una función con el nombre de booleanoArray() que tome dos arreglos de números como parámetro y que retorne un booleano, unir los dos arreglos en uno solo, si la longitud del nuevo arreglo es mayor o igual a 10 que retorne true si es menor a 10 que retorne false.
 */

let booleanoArray = (arr1, arr2) =>  arr1.concat(arr2).length >= 10 

//console.log(booleanoArray( [4,10,4,3,4,5],[4,10,4,2]))

/* Ejercicio #7
Crear una función con el nombre de funcionArray() que tome dos arreglos de números enteros como parámetro y retornar un único arreglo, cada elemento del arreglo debe estar multiplicado por dos. ej: [2,5,2][1,5,3] -> [4,10,4,2,10,6]. */

let funcionArray = (arr1, arr2) => arr1.concat(arr2).map(element => element * 2)

console.log(funcionArray([2, 10, 20, 30],[1, 5, 10, 15]))
