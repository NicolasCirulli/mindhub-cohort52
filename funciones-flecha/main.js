const saludar = function( alumno ){
    console.log('hola '+ alumno)
}

saludar( "Renzo" )
saludar( "Camila" )

// Funciones flecha
// otra manera de crear funciones
// son por definicion anonimas
// Si tiene 1 solo parametro, se puede omitir los parentesis
// Si tiene una sola instrucción, se puede omitir las llaves y el return se da por implicito

const saludarFlecha = nombre => 'hola ' + nombre 

const aux = saludarFlecha( "Sofia" )
console.log( aux )

const sumar = ( a, b ) => a + b

const sumarNormal = function(a,b){
    return a + b
}

console.log( sumar( 10, 5 ) )

