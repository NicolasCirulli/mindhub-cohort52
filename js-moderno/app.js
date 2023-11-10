import { sumar, crearMensaje } from './module/funciones.js'
import datos from './module/datos.js'
console.log( datos )
// Ternarios
/* condicion 
    ? si se cumple 
    : si no se cumple 
*/
/* 20 > 10 
    ? console.log('clg:true')
    : console.log("clg:false") 
*/

let edadNico = 29
let edadLaura = 56

const esMayor = edadNico > edadLaura ? "Nico es mayor a Laura" : "Laura es mayor a Nico"

let esMayorConIf

if( edadNico > edadLaura ){
    esMayorConIf =  "Nico es mayor a Laura"
}else{
    esMayorConIf = "Laura es mayor a Nico"
}


let mayorConIf
if( edadNico > edadLaura  ){
    mayorConIf = "Nico"
}else{
    mayorConIf = "Laura"
}


let mayor = `Es mayor: ${ edadNico > edadLaura ? "Nico" : "Laura"}`

/* console.log( esMayor )
console.log( mayor ) */

// Destructuring


/* 
    const nombre = tomi.nombre
    const edadTomi = tomi.edad
    const mascota = tomi.mascota
 */

const { mascota:{ nombre: nombreMascota, raza } ,nombre, edad:edadTomi } = datos.tomi

/* console.log( nombreMascota, raza ) */

console.log( crearMensaje( datos.tomi ) )
console.log( crearMensaje( { nombre: "Laura", edad: 56 } ) )



const alumnos = ["Laura", "Alvaro"]

const primerNombre = alumnos[0]
const segundoNombre = alumnos[1]

const [ a, b ] = alumnos

/* console.log( primerNombre )
console.log( segundoNombre )

console.log( a, b )
 */
// Spread operator -> ...

const numeros = [ 250, ...datos.pares, ...datos.impares, 340, 1000 ]

const copiaNumeros = [...numeros ]

const prueba = 

console.log(numeros)
console.log( Math.max( ...numeros  ) )
console.log( Math.min( ...numeros  ) )
/* console.log( parseInt( Math.random() * 10000 ) ) */

const copiaTomi = {...datos.tomi}
console.log( copiaTomi )
console.log( [ ...datos.nombreMentor ] )

const parrafos = document.querySelectorAll('p')
const arrayParrafos = [  ...parrafos  ] 
const parrafosArray = Array.from( parrafos )
const textContentParrafos = arrayParrafos.map( nodo =>  nodo.textContent  ) 
console.log( textContentParrafos )

// parametros rest


console.log("flecha:", sumar( [1,2,3,4,5] ) )

// Set
const array = [1,1,1,1,1,1,2,3,4,4,4,4,5]

const set = new Set( array )

const sinRepetidos = [ ...set ]

const sinRepetidosDos = [ ...new Set( array ) ]

console.log( sinRepetidosDos )

// ESModules

