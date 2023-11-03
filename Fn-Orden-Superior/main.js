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

function mapNico( lista, fn ){
    let aux = [  ]
    for( let i = 0; i < lista.length; i++ ){
        const retornoFuncion = fn( lista[i], i, lista )
        aux.push( retornoFuncion )
    }
    return aux
}


const mensajesMentores = mentores.map( mentor => `Hola soy ${mentor.nombre} y tengo ${mentor.edad} años` )
const nombresMentores = mentores.map(  mentor => mentor.nombre )
const edadesMentores = mentores.map( mentor => mentor.edad  )
console.log( mensajesMentores )
console.log( nombresMentores )
console.log( edadesMentores )

console.log( mentores )


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

const mentoresMayoresA30 = mentores.filter( mentor => mentor.edad > 30 )
                                   .map( mentor => mentor.nombre )


console.log( mentoresMayoresA30 )

/* const frutasDulces = frutas.filter( fruta => fruta.esDulce )

console.log( frutasDulces ) */

// find
function filterNico( lista, fn ){
    for( let i = 0; i < lista.length; i++ ){
        const retornoFuncion = fn( lista[i], i, lista )
        if( retornoFuncion ){
           return lista[i]
        }
    }
    return undefined
}

const primerMentorMayorA30 = mentores.find( mentor => mentor.edad > 30 )
console.log( primerMentorMayorA30 )

// reduce

// sort


// every, some, flat

function fnForEach( mentor, indice, arrayOriginal ){
    console.log( `Hola soy ${mentor.nombre} y tengo ${mentor.edad} años` )
}