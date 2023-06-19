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


