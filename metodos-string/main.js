/* const nombre = "Nicolas"

const saludo = `       hola soy Nicolas y tengo 29 años.
    soy mentor.
    tengo un gato.        `

const nombreMayus = nombre.toUpperCase()

console.log( nombreMayus )

const nombreMinus = nombre.toLowerCase()

console.log( nombreMinus )

console.log( nombre.charAt( 3 ) )

console.log( nombre[3] )

console.log( nombre.slice( 0, 4 ) )

console.log( nombre.substring( 0, 4 ) )

console.log( saludo.replace( "nicolas", "Catriel" ) )

console.log( saludo.indexOf( "nico" ) )

console.log( saludo.includes( 'nico' ) )

const palabrasSaludo = saludo.split( "\n" ).map( palabra => {
    const palabraSinEspacios = palabra.trim()
    const primerLetraEnMayuscula = palabraSinEspacios.charAt(0).toUpperCase()
    const elRestoDeLaFrase = palabraSinEspacios.slice( 1 )
    const nuevaFrase = primerLetraEnMayuscula + elRestoDeLaFrase
    return nuevaFrase
} ) 
console.log( palabrasSaludo )

const fraseNueva = palabrasSaludo.join( "\n" ) 
console.log( fraseNueva )
for (const letra of nombre) {
    console.log(letra)
}

const saludoCatriel = fraseNueva.replace( "Nicolas", "Catriel" )
console.log( saludoCatriel.startsWith( "Hola soy Catriel" ) ) */

// Number

/* const edad = "29"
const altura = "1.74"
const apellido = "Cirulli"
// NaN -> Not a Number

// parseInt
console.log( "parseInt" )
console.log( parseInt( edad ) )
console.log( parseInt( altura ) )
console.log( parseInt( apellido ) )

// parseFloat
console.log( "parseFloat" )
console.log( parseFloat( edad ) )
console.log( parseFloat( altura ) )
console.log( parseFloat( apellido ) )

// isNaN
console.log( "isNaN" )
console.log( "isNaN('Cirulli'):", isNaN( apellido ) )
console.log( "isNaN( '29' ):", isNaN( edad ) )


const edadEnNumero = parseInt( "29.5" )

console.log( +"29" )

if( !isNaN( edadEnNumero ) ){
    console.log( 'edad valida' )
}else{
    console.log('edad invalida')
}

// toFixed
const numero = 230.51900001
console.log( numero.toFixed(2) )

// toLocaleString
const precio = 25000000
console.log( precio )
console.log( precio.toLocaleString( "ES-Ar", { style: "currency", currency: "USD" } ) )

// Objeto Math
const numeros = [300, 2, 400, 30000, 0, -10, 500000]
console.log( "Objeto Math: ", Math )
console.log( "Math.abs(-10) ", Math.abs( -10 ) )
console.log(  "Math.max(...[300, 2, 400, 30000, 0, -10, 500000]) ",Math.max( ...numeros ) )
console.log( "Math.min(...[300, 2, 400, 30000, 0, -10, 500000]) ", Math.min( ...numeros ) )
console.log(  "Math.floor( 20.6 ) ",Math.floor( 20.6 ) )
console.log(  "Math.ceil(20.6) ",Math.ceil( 20.6 ) )
console.log(  "Math.random() ",( Math.random() ) )
console.log( parseInt( Math.random() * 100 ))
 */


