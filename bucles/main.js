// for 

const alumnos = [ "Alvaro","Jose", "Camila", "Daniela", "Emiliano", "Erick", "Sofi", "Laura", "Nico" ]
/* console.log( alumnos[0] )
console.log( alumnos[1] )
console.log( alumnos[2] )
console.log( alumnos[3] )
console.log( alumnos[4] )
console.log( alumnos[5] )
console.log( alumnos[6] )
console.log( alumnos[7] ) */


/* 
for( let indice = 0; indice < alumnos.length ; indice++ ){
    console.log( alumnos[indice] )
} */

/* console.log( alumnos.includes( "Alvaro" ) ) */



function includes( nombreABuscar, array ){
    let resultado = false
    for (let index = 0; index < array.length; index++) {
        if( array[index] == nombreABuscar ){
            resultado = true
            break
        }
    }
   return resultado
}

/* console.log(  includes( "Daniela", alumnos )  ) */
/* console.log(  includes( "Renzo", alumnos )  )
console.log(  includes( "Nico", alumnos )  )
console.log(  includes( "Sofi", alumnos )  ) */

/* 
for( let i = 0; i < alumnos.length; i++ ){
    if( alumnos[i] != "Nico" ){
        continue
    }
    console.log( alumnos[i] )
} */



/* console.log('después del bucle') */

// While

/* 
let numerosIngresados = []
let numeroIngresado = Number( prompt( 'Ingrese un numero o 999 para finalizar' ) )
numerosIngresados.push( numeroIngresado )

while( numeroIngresado != 999 ){
    numeroIngresado = Number( prompt( 'Ingrese un numero o 999 para finalizar' ) )
    numerosIngresados.push( numeroIngresado )
}

console.log( numerosIngresados )  */


// Do while

let numerosIngresados = []
let numeroIngresado 
/* let numeroIngresado = Number( prompt( 'Ingrese un numero o 999 para finalizar' ) )
numerosIngresados.push( numeroIngresado ) */
/* do {
    numeroIngresado = Number( prompt( 'Ingrese un numero o 999 para finalizar' ) )
    if( numeroIngresado != 999 ){
        numerosIngresados.push( numeroIngresado )
    }
} while (numeroIngresado != 999); */

/* console.log( numerosIngresados ) */



// for of

/* const numeros = [ 10,20,30,40,50 ]

for( const elemento of numeros ){
    console.log( elemento )
}
console.log('---------')
for( let indice = 0; indice < numeros.length; indice++ ){
    console.log( numeros[indice] )
}
 */


// For in


/* let mentor = {
    nombre: 'Nicolas',
    edad: 29,
    mentor: true,
    pepito : 'pepito'
}

for( const key in mentor ){
    console.log( key )
} */


let nombreIngresado = prompt('Ingrese su nombre')
let pase = prompt( 'Ingrese el tipo de pase "VIP" o "NORMAL"' )
let entrada = prompt( 'Tiene entrada ? "SI" o "NO"' )


if( nombreIngresado == "Nicolas" || pase == "VIP" ){
    alert( 'Bienvenido ' + nombreIngresado  )
}else if( entrada == "SI"){
    let entradaDos = prompt( 'Desea utlizar la entrada? "SI" o "NO"' )
    if( entradaDos == "SI" ){
        alert( 'Bienvenido ' + nombreIngresado )
    }else{
        alert( 'Adios' )
    }
}else{
    let comprarEntrada = prompt('Queire comprar una entrada? "SI" o "NO"')
    if( comprarEntrada == "SI" ){
        let dinero = Number( prompt('Ingrese el dinero disponible') )
        if( dinero > 1000 ){
            alert( 'Bienvenido ' + nombreIngresado )
        }else{
            alert( 'Compra rechazada' )
        }
    }else{
        alert( 'Adios' )
    }
}

