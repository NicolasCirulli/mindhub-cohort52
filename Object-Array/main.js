// Object
let nombre = "Nicolas"
const auto = { 
    marca : "Ford",
    colores : [ "Negro", "Azul", "Gris", "Blanco" ],
    puertas : 4,
    modelo : 2023,
    velocidadMaxima : 200,
}

const autoDos =  { 
    marca : "Fiat",
    colores : [ "Negro", "Azul", "Gris", "Blanco" ],
    puertas : 4,
    modelo : 2023,
    velocidadMaxima : 180,
}

const autos = [ auto, autoDos ]

/* 
console.log(auto)

console.log( autos[0] )

console.log( auto == autos[0] ) */

/* const keys = Object.keys( auto )

console.log( keys )

const values = Object.values( auto )

console.log( values )

const entries = Object.entries( auto )

console.log( entries )

Object.freeze( auto )

console.log( Object.isFrozen( auto ) )

auto.marca = 'nueva marca'

console.log( auto ) */

const obj1 = {
    nombre : 'Nombre original',
    edad : 20,
    mentor : null
}
const obj2 = {
    nombre : 'Nicolas',
    mentor : true,
    mascota : 'Kugi'
}
const obj3 = {
    nombre : 'Nombre de obj3',
    propiedadNueva : 'otra propiedad'
}

/* Object.assign( obj1, obj2, obj3 )

console.log( obj1 )
console.log( obj2 )
console.log( obj3 ) */

/* const copiaAutoReal = Object.assign( {}, auto )

console.log( copiaAutoReal == auto) */

/* const copiaAuto = auto

const otraCopia = { 
    marca : "Ford",
    colores : [ "Negro", "Azul", "Gris", "Blanco" ],
    puertas : 4,
    modelo : 2023,
    velocidadMaxima : 200,
} */

/* auto.puertas = 5
auto.disponible = true
delete auto.velocidadMaxima */

/* console.log( auto )
console.log( copiaAuto )
console.log( auto === copiaAuto )
console.log( auto == otraCopia ) */

// Array 

const alumnos = [ "Alvaro","Jose", "Camila", "Daniela", "Emiliano", "Erick" ]
console.log( alumnos )

// Agregar elementos
alumnos.push( "Federico", "Felipe" )
alumnos.unshift( "Laura", "Jeimnis" )

// Borrar elementos
alumnos.pop()
alumnos.shift()

// Como modificar un array
/* alumnos.splice( 3, 2 )
alumnos.splice( 1, 0, "Sofia", "Xavier", "Yani" ) */

// Buscar el indice de un elemento

const indiceDeAlvaro = alumnos.indexOf( "Alvaro" )


if( alumnos.indexOf( 'Jose' ) >= 0 ){
    console.log('Jose esta en el array')
}else{
    console.log( 'Jose no esta en el array' )
}

const alvaro = alumnos.splice( indiceDeAlvaro, 1 )
console.log( alvaro )
console.log( indiceDeAlvaro )
console.log( alumnos )

// Ver si el array tiene un elemento

const alumnoABuscar = "Erick"

if( alumnos.includes( alumnoABuscar ) ){
    console.log(`${alumnoABuscar} esta en el array`)
}else{
    console.log( `${alumnoABuscar} no esta en el array` )
}