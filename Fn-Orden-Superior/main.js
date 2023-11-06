/* // Funciones de primera clase
const sumar = ( a, b ) => a + b
function multiplicar(a,b){
    return a * b
}

// funciones de orden superior
function calculadora( operacion, numero, numeroDos  ){
    const resultado = operacion( numero, numeroDos )
    return resultado
}

const resultado = calculadora( sumar, 10, 20 )

const resultado2 = calculadora( function(num1, num2){return num1 - num2 },  15, 20 )

const resultado3 = calculadora( multiplicar, 30, 20,  )

const resultado4 = calculadora( ( a,b ) => a / b, 50, 20  )

console.log( resultado )
console.log( resultado2 )
console.log( resultado3 )
console.log( resultado4 )

console.log( multiplicar ) */


// metodos de array
console.log( mentores )

// forEach
/* mentores.forEach( fnForEach ); */

/* mentores.forEach( mentor => console.log(mentor.nombre) ) */

/* for (const mentor of mentores) {
    console.log(mentor.nombre)
} */

/* function forEachNico( lista, fn ){
    for( let i = 0; i < lista.length; i++ ){
        fn( lista[i], i, lista )
    }
} 

forEachNico( mentores, fnForEach ) */

// map
// Crear un nuevo array, con todos los return de la funcion que le pasamos

/* function mapNico( lista, fn ){
    let aux = [  ]
    for( let i = 0; i < lista.length; i++ ){
        const retornoFuncion = fn( lista[i], i, lista )
        aux.push( retornoFuncion )
    }
    return aux
} */


/* const mensajesMentores = mentores.map( mentor => `Hola soy ${mentor.nombre} y tengo ${mentor.edad} años` )
const nombresMentores = mentores.map(  mentor => mentor.nombre )
const edadesMentores = mentores.map( mentor => mentor.edad  )
console.log( mensajesMentores )
console.log( nombresMentores )
console.log( edadesMentores )

console.log( mentores ) */


// filter

/* function filterNico( lista, fn ){
    let aux = [  ]
    for( let i = 0; i < lista.length; i++ ){
        const retornoFuncion = fn( lista[i], i, lista )
        if( retornoFuncion ){
            aux.push( lista[i] )
        }
    }
    return aux
}
 */

/* const mentoresMayoresA30 = mentores.filter( mentor => mentor.edad > 30 )
                                   .map( mentor => mentor.nombre )


console.log( mentoresMayoresA30 ) */

/* const frutasDulces = frutas.filter( fruta => fruta.esDulce )

console.log( frutasDulces ) */

// find
/* function filterNico( lista, fn ){
    for( let i = 0; i < lista.length; i++ ){
        const retornoFuncion = fn( lista[i], i, lista )
        if( retornoFuncion ){
           return lista[i]
        }
    }
    return undefined
}

const primerMentorMayorA30 = mentores.find( mentor => mentor.edad > 30 )
console.log( primerMentorMayorA30 ) */


// toSorted
// metodo para ordenar elementos en un array
/* console.log( frutas )
const frutasOrdenadasPorNombre = frutas.toSorted( ( a, b ) => {
    if(  a.stock > b.stock  ){
        return 1
    }else if(a.stock < b.stock  ){
        return -1
    }else{
        return 0
    }
} ).map( fruta => fruta.stock )
console.log( frutasOrdenadasPorNombre ) */


/* const nombresFrutasOrdenado = frutas.map( fruta => fruta.nombre ).toSorted( (a,b) => {
    if(  a < b  ){
        return 1
    }else if(a > b  ){
        return -1
    }else{
        return 0
    }
}  )

const multiplicarEjercicio = (num1, num2) => num1 * num2

console.log( nombresFrutasOrdenado ) */

/* 

Partiendo de un array const array = [ 1,2,3,4,5,6,7,8,9 ], 
aplicarle un map a ese array y pasarle como argumento la función nombrada mostrada en el ejemplo del punto 2. 
Mostrar por consola el nuevo array obtenido.

*/



/* const array = [ 1,2,3,4,5,6,7,8,9 ].map( multiplicarEjercicio )
console.log( array ) */
// reduce

/* 

Generar una función que reciba como parámetro un array de cervezas 
y devuelva un nuevo array con las 10 cervezas menos amargas.

*/

/* console.log( beers ) */

function filtrarCervezas( cervezas, propiedad ){
    const resultado = cervezas.filter( beer => beer[propiedad] )
                        .toSorted( (a,b) => a[propiedad] - b[propiedad] )
                        .slice( 0, 10 )
    console.log( resultado )
} 
filtrarCervezas( beers, 'abv' )

// every, some, flat
function fnForEach( mentor, indice, arrayOriginal ){
    console.log( `Hola soy ${mentor.nombre} y tengo ${mentor.edad} años` )
}

/* 

Utilizando el bucle que creas correcto, 
vamos a utilizar la variable que guardaba la suma de los número en el ejercicio N°3. 
El programa permitirá ingresar números a través de un promt hasta que el número ingresado sea igual 
al guardado en la variable del ejercicio n°3. 

Si el valor ingresado es mayor al número de la variable, 
avisarle al usuario por consola, lo mismo si el valor es menor. 
Así sucesivamente hasta que el usuario adivine el número secreto. 
Por último mostrar un mensaje por pantalla de felicitaciones y decirle en cuantos intentos lo ha realizado.

*/

/* const suma = 25
let numeroIngresado 
let intentos = 0
do {
    numeroIngresado = Number(prompt( 'Ingrese un numero' ))
    if( numeroIngresado < suma ){
        alert('El numero es menor vas por el intento ' + intentos)
    }else if( numeroIngresado > suma ){
        alert( 'El numero ingresado es mayor vas por el intento ' + intentos)
    }else{
        alert( `felicitaciones adivinaste y te tomo ${intentos} intentos` )
    }
    intentos++
} while ( numeroIngresado != suma ); */

/* 
    Partiendo de las constantes fechaLimite y fechas, 
    realizar un bucle ( el que creas correcto ) 
    que muestre por consola las fechas del array que sean mayores o iguales 
    a la fecha almacenada en la constante fechaLimite.
*/

const fechaLimite = "1997-8-3"
const fechas = ["1984-18-2", "1998-3-2", "1973-15-7", "2024-21-18", "2001-1-9"]

/* for (const fecha of fechas) {
    if( fecha >= fechaLimite ){
        console.log( fecha )
    }
}
console.log('--------')
for( let i = 0; i < fechas.length; i++ ){
    if( fechas[i] >= fechaLimite ){
        console.log( fechas[i] )
    }
}
console.log('--------')
fechas.toSorted().forEach( fecha => {
    if( fecha >= fechaLimite ){
        console.log( fecha )
    }
} ) */

const series = [
    {
        nombre: "Stranger Things",
        genero: ["Terror", "Fantasía", "Suspenso"]
    },
    {
        nombre: "You",
        genero: ["Suspenso", "Drama", "Thriller"]
    },
    {
        nombre: "Lupin",
        genero: ["Acción", "Comedia", "Fantasía"]
    }
]

/* 
    Partiendo del array mostrado en el ejemplo de la derecha, 
    realizar un programa que imprima por consola cada uno de los géneros de las 3 series.
*/

/* 
const generosSinRepetidos = []
for (const serie of series) {
    for (const genero of serie.genero) {
        if( !generosSinRepetidos.includes( genero ) ){
            generosSinRepetidos.push(  genero )
        }
        
    }
}
for (const genero of generosSinRepetidos) {
    console.log( genero )
} */

/* 
Optimizar el programa anteriormente creado y mostrar por consola los géneros solamente 1 vez, 
en caso de estar repetido el mismo se debe buscar la forma de que no se muestren duplicados en la consola.
*/



/* 

Crear un programa que permita el ingreso por pantalla de un género, 
en caso de coincidir con alguno de los géneros de las series dadas, 
el programa deberá mostrar por pantalla un mensaje que diga “Existe una serie con ese género”, 
de lo contrario deberá decir “No existe una serie con ese género”

*/

// prompt [x]
// generosSinRepetidos -> si tiene el genero que ingreso por prompt [x]
// si existe -> “Existe una serie con ese género” [x]
// si no existe -> “No existe una serie con ese género” [x]

/* const generoIngresado = prompt( 'Ingrese un genero' )

const incluye = generosSinRepetidos.includes( generoIngresado )

if( incluye ){
   alert( "Existe una serie con ese género" )
}else{
    alert( "No existe una serie con ese género" )
} */


/* 

Realizar un juego de adivinanza:
En un variable numeroIncognita almacenar un valor entre 1 y 10. 
El usuario ingresará por pantalla 3 intentos, cada uno se guardará en una variable llamada numeroIngresado, 
y en cada intento deberás mostrarle un mensaje al usuario diciendo si el número que ingresó es: 
mayor: “el numero ingresado es mayor, vuelve a intentarlo”
menor: “el numero ingresado es menor, vuelve a intentarlo”
igual: “Ganaste, has adivinado el número.”


*/

// una variable con un numero entre 1 y 10
// Pedirle al usuario que ingrese un numero
// Comparar el numero incognita con el numero ingresa
//  Si el numero es igual -> felicitar al usuario
//  Si el numero es mayor -> Le aviso que el numero es mayor y le doy otro intento
//  Si el numero es menor -> Le aviso que el numero es menor y le doy otro intento

// segundo intento 
// Pedirle al usuario que ingrese un numero
// Comparar el numero incognita con el numero ingresa
//  Si el numero es igual -> felicitar al usuario
//  Si el numero es mayor -> Le aviso que el numero es mayor y le doy otro intento
//  Si el numero es menor -> Le aviso que el numero es menor y le doy otro intento

// tercer intento 
// Pedirle al usuario que ingrese un numero
// Comparar el numero incognita con el numero ingresa
//  Si el numero es igual -> felicitar al usuario
//  Si el numero es mayor -> Te quedaste sin intentos
//  Si el numero es menor -> Te quedaste sin intentos

/* const numeroIncognita = 7

let numeroIngresado = Number( prompt('Ingrese un numero') )

if( numeroIncognita == numeroIngresado ){
    alert( 'Felicidades encontraste el numero incognita te tomo 1 intento' )
}else if( numeroIngresado > numeroIncognita){
    alert( 'El numero ingresado es mayor al numero incognita, te quedan 2 intentos' )
    numeroIngresado = Number( prompt('Ingrese un numero') )
    if( numeroIngresado == numeroIncognita ){
        alert( 'Felicidades encontraste el numero incognita te tomo 2 intentos' )
    }else if( numeroIngresado > numeroIncognita ){
        alert( 'El numero ingresado es mayor al numero incognita, te quedan 1 intentos' )
        numeroIngresado = Number( prompt('Ingrese un numero') )
        if( numeroIncognita == numeroIngresado ){
            alert( 'Felicidades encontraste el numero incognita te tomo 3 intentos' )
        }else{
            alert( "Te quedaste sin intentos" )
        }
    }else{
        alert( 'El numero ingresado es menor al numero incognita, te quedan 1 intentos' )
        numeroIngresado = Number( prompt('Ingrese un numero') )
        if( numeroIngresado == numeroIncognita ){
            alert( 'Felicidades encontraste el numero incognita te tomo 3 intento' )
        }else{
            alert( "Te quedaste sin intentos" )
        }
    }
}else{
    alert( 'El numero ingresado es menor al numero incognita, te quedan 2 intentos' )
    numeroIngresado = Number( prompt('Ingrese un numero') )
    if( numeroIncognita == numeroIngresado ){
        alert( 'Felicidades encontraste el numero incognita te tomo 2 intentos' )
    }else if( numeroIngresado > numeroIncognita ){
        alert( 'El numero ingresado es mayor al numero incognita, te quedan 1 intentos' )
        numeroIngresado = Number( prompt('Ingrese un numero') )
        if( numeroIngresado == numeroIncognita ){
            alert( 'Felicidades encontraste el numero incognita te tomo 3 intentos' )
        }else{
            alert( "Te quedaste sin intentos" )
        }
    }else{
        alert( 'El numero ingresado es menor al numero incognita, te quedan 1 intentos' )
        numeroIngresado = Number( prompt('Ingrese un numero') )
        if( numeroIncognita == numeroIngresado ){
            alert( 'Felicidades encontraste el numero incognita te tomo 3 intentos' )
        }else{
            alert( "Te quedaste sin intentos" )
        }
    }
} */