// declaracion de funcion
// Procedimiento -> porque la funcion no retorna nada
function saludar(){
    console.log('Inicio de la funcion nombrada')
    console.log( 'Hola alumnos' )
    console.log('Fin de la funcion nombrada')
}

/* saludar() */

// expresion de funcion
// Funcion anonima -> No tiene nombre
const saludarDos = function(){
    console.log('Inicio de la funcion saludarDos')
    console.log( 'Hola alumnos' )
    console.log('Fin de la funcion saludarDos')
}

/* saludarDos() */

let alumno = 'Daniela'
// parametros
function crearSaludo( alumno ){
    console.log( `Hola ${ alumno }` )
}
crearSaludo( "Alvaro" )
crearSaludo( "Camila" )

function mostrarELAreaDeUnCuadrado( base, altura, nombre ){
    console.log( `Hola ${nombre}, el area del cuadrado es: ${ base * altura }` )
}
const resultado = mostrarELAreaDeUnCuadrado( "30", 20, "Nicolás" )

console.log( resultado )

// return 

function obtenerElAreaDeUnCuadrado( altura, base ){
    const area = altura * base
    return area
}

const areaDelCuadrado = obtenerElAreaDeUnCuadrado( 20, 30  )
const areaDelCuadradoDos = obtenerElAreaDeUnCuadrado( 50, 30  )
console.log( areaDelCuadrado )
console.log( areaDelCuadradoDos )


function crearMensajeArea( nombre, area ){
    return `Hola ${nombre}, el area del cuadrado es: ${ area }`
}

// Mostrar por consola el mensaje para Nicolas con el area de un cuadrado de 50 x 50

const nombreConsigna = "Nicolas"

const areaObtenida = obtenerElAreaDeUnCuadrado( 50, 50 )

const mensaje = crearMensajeArea( nombreConsigna, areaObtenida )

console.log( mensaje )


// metodos

const mentor = {
    nombre : 'Nicolas',
    edad: 29,


    saludar : function(){
        console.log('hola alumnos')
    } 
}


const alumnos = [ "Alvaro","Jose", "Camila", "Daniela", "Emiliano", "Erick" ]


function buscarAlumno( alumno ){
    if( alumnos.includes( alumno ) ){
        console.log(`${alumno} esta en el array`)
    }else{
        console.log( `${alumno} no esta en el array` )
    }
}

buscarAlumno( "Erick" )
buscarAlumno( "Alvaro" )
buscarAlumno( "Flor" )
buscarAlumno( "Matias" )


console.log( alumnos.indexOf( "Erick" ) )
console.log( alumnos.indexOf( "Matias" ) )


function estaEnElArray( alumno, array ){
    const indice = array.indexOf( alumno )
    /* if( indice >= 0 ){
        return true
    }else{
        return false
    } */
    return indice >= 0
}


console.log( estaEnElArray( "Erick", alumnos ) )
console.log( estaEnElArray( "Flor", alumnos ) )