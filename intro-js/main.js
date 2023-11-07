// Console log -> Muestra por consola un dato
/* console.log( "Hola alumnos" ) */


// Variables let, const y var ( no se usa mas )

let nombres
let apellido
nombres = "Nicolás" 
nombres = "Nicolás Catriel"
apellido = "Cirulli"

const dni = "38.000.000"

let nombreCompleto = nombres + " " + apellido

/* console.log( nombreCompleto ) */


// Primitivos
// String ( cadena de caracteres )

const aux = `Hola soy ${nombres} ${apellido}`

/* console.log( aux ) */

// Number ( numeros )

const edad = 29
const estatura = 1.74
let temperatura = -5

/* console.log( `Hola me llamo ${nombres} y tengo ${edad} años` )
console.log( "edad", edad )
console.log( estatura )
console.log( temperatura ) */

// Boolean ( true o false ) 
let verdadero = true
const falso = false

/* console.log( verdadero )
console.log( falso ) */

// Null
let mascota = null
/* console.log( mascota ) */

// Undefined
let prueba
/* console.log( prueba ) */

// Objetos
let samsung = {
    marca : "Samsung",
    tamaño : 20,
    color : "Negro",
    disponible : false,
    origen : null
}
let motorola = {
    marca : "Motorola",
    tamaño : 17,
    color : "Azul",
    disponible : true,
    origen : "Brasil"
}
/* console.log( samsung["marca"] )
console.log( motorola.color ) */
// Array
/* const celulares = [ samsung, motorola ]
console.log( celulares[0].marca ) */

const alumnos = [
    {nombre : "Tomas", edad: 25}, 
    {nombre : 'Alvaro',edad : 25}, 
    {nombre : 'Camila',edad : 25}, 
    {nombre : 'Daniela',edad : 25}, 
    {nombre : 'Emiliano',edad : 25}, 
    {nombre : 'Erick',edad : 25}, 
]
/* console.log( alumnos )
console.log( alumnos[0].nombre ) */


// operadores

//Aritmeticos
/*  
    console.log( 2 + 2 )
    console.log( 3 - 2 )
    console.log( 5 * 3 )
    console.log( 10 / 2 )
    console.log( 2 ** 3 ) 
    console.log( 10 % 2 )  
*/

// Comparacion

/* console.log( 3 > 2 )
console.log( 3 < 2 )
console.log( 3 >= 3 )
console.log( 3 <= 3 ) */ 
/* console.log( 3 == "3" )
console.log( 3 === "3" ) */
/* console.log( 2 != "2" )
console.log( 2 !== "2" ) */

let edadNicolas = 29

let edadLucre = 28

console.log( edadNicolas > edadLucre )

const nombreIngresado = prompt( "Ingrese su nombre" )

console.log( nombreIngresado )