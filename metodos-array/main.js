// Scope || alcance de una variable
// let y const -> scope de bloque
// var ->  scope local

const nombre = "Daniela"

/* if( nombre == 'Daniela' ){
    console.log('hola Daniela')
}else{
    console.log('hola ')
}

for (let index = 0; index < 5; index++) {
    
    console.log( index )
    
} */

// Funciones

const alumnos =  [ 
    {
        nombre : 'Sofi',
        edad: 19
    }, 
    {
        nombre : 'Marce',
        edad: 36
    }, 
    { 
        nombre : 'Renzo',
        edad: 20 
    } 
]

function obtenerTabla( multiplo ){
    const numeros = [ 1,2,3,4,5,6,7,8,9,10 ]
    const resultado = []
    for (const numero of numeros) {
        resultado.push( `${numero} x ${multiplo} = ${numero * multiplo}` )
    }
    return resultado
}

const tablaDelCinco = obtenerTabla( 5 ) 
const tablaDelTres = obtenerTabla( 3 )

// Metodos de array
console.log( beers )

// ejercico 1
const imprimirMensaje =  mensaje => console.log( mensaje )

// ejercicio 2
const crearMultiplicacion = ( numero1, numero2 ) => numero1 * numero2

// ejercicio 3
const array = [ 1,2,3,4,5,6,7,8,9 ]
const ejercicio3 = array.map( crearMultiplicacion )
// const resultado = [ 0, 2, 6, 12, 20, 30, 42, 56, 72]
// crearMultiplicacion( 1, 0, [ 1,2,3,4,5,6,7,8,9 ] ) -> 0
// crearMultiplicacion( 2, 1, [ 1,2,3,4,5,6,7,8,9 ] ) -> 2
// crearMultiplicacion( 3, 2, [ 1,2,3,4,5,6,7,8,9 ] ) -> 6
// crearMultiplicacion( 4, 3, [ 1,2,3,4,5,6,7,8,9 ] ) -> 12
// crearMultiplicacion( 5, 4, [ 1,2,3,4,5,6,7,8,9 ] ) -> 20
// crearMultiplicacion( 6, 5, [ 1,2,3,4,5,6,7,8,9 ] ) -> 30  
// crearMultiplicacion( 7, 6, [ 1,2,3,4,5,6,7,8,9 ] ) -> 42
// crearMultiplicacion( 8, 7, [ 1,2,3,4,5,6,7,8,9 ] ) -> 56
// crearMultiplicacion( 9, 8, [ 1,2,3,4,5,6,7,8,9 ] ) -> 72
// return resultado


/* console.log( ejercicio3 ) */

// Ejercicios 4
function obtenerMasAlcoholicas( array ){
    const ordenadas = array.toSorted( ( a,b ) => b.abv - a.abv )
    return ordenadas.slice( 0, 10 ) 
}

const masAlcoholicas = obtenerMasAlcoholicas( beers )

// ejercicio 5
function obtenerMenosAmargas( array ){
    const tienenIbu = array.filter( beer => beer.ibu )
    const ordenadas = tienenIbu.toSorted( ( a,b ) => a.ibu - b.ibu )
    return ordenadas.slice( 0, 10 ) 
}

const menosAmargas = obtenerMenosAmargas( beers )

console.log( menosAmargas )

// ejercicio 6
function buscarCerveza( listaCervezas, nombreABuscar ){
    const cervezaEncontrada = listaCervezas.find( cerveza => cerveza.name == nombreABuscar )
    return cervezaEncontrada
} 

console.log( buscarCerveza( beers, "Buzz" ) )
console.log( buscarCerveza( beers, "No existe" ) )

function buscarCervezaPorIbu( listaCervezas, ibuABuscar ){
    const cervezaEncontrada = listaCervezas.find( cerveza => cerveza.ibu == ibuABuscar )
    return cervezaEncontrada 
                ? cervezaEncontrada 
                : 'No existe cerveza con ese ibu ' + ibuABuscar
   /*  if( cervezaEncontrada ){
        return cervezaEncontrada
    }else{
        return 'No existe cerveza con ese ibu ' + ibuABuscar 
    } */
}

console.log( buscarCervezaPorIbu( beers, 41.5 ) )
console.log( buscarCervezaPorIbu( beers, 7 ) )

// Ejercicio 8
/* 
    Generar una función que reciba como parámetro un nombre de una cerveza 
    y devuelva la posición en el array de esa cerveza. 
    En caso de no encontrar el dicha cerveza se debe imprimir por consola un mensaje 
    diciendo “(Nombre de la cerveza ingresada) no existe”. 
*/

function buscarIndicePorNombre( listaCervezas, nombreABuscar ){
    const indiceEncontrado = listaCervezas.findIndex( cerveza => cerveza.name == nombreABuscar )
    return indiceEncontrado >= 0
        ?  indiceEncontrado 
        : 'No existe cerveza con el nombre: ' + nombreABuscar
} 

console.log( buscarIndicePorNombre( beers, "Libertine Porter" ) )
console.log( buscarIndicePorNombre( beers, "Cerveza inventada" ) )

/* 
Ejercicio 9
Generar una función que reciba como parámetro el array de cervezas y un valor de alcohol. 
La función debe devolver un nuevo array con las cervezas que no excedan el nivel etílico. 
Cada elemento del nuevo array debe ser un objeto 
que tenga la propiedades nombre, alcohol (abv) y "amargor" (ibu)

*/

function filtrarPorAlcohol( listaCervezas, valorAlcohol ){
    const filtradas = listaCervezas.filter( cerveza => cerveza.abv <= valorAlcohol )
    const nuevoArray = filtradas.map( cerveza => {
        return {
            nombre: cerveza.name,
            alcohol : cerveza.abv,
            amargor : cerveza.ibu
        }
    } )
    return nuevoArray
} 

console.log( filtrarPorAlcohol( beers, 5 ) )


/* 
Ejercicio 9
Generar una función que reciba como parámetro un array de cervezas, 
un nombre de propiedad y un valor booleano. 
Debe devolver un nuevo array con 10 cervezas ordenadas por la propiedad ingresada como segundo argumento,
de manera ascendente si el tercero es true o descendente si es false.
*/

function filtrarCervezas( listaCervezas, propiedadParaOrdenar, valorBooleano ){
    const filtradas = listaCervezas.filter( cerveza => cerveza[propiedadParaOrdenar] )
    const ordenadas = filtradas.toSorted( (a,b) => {
        if( a[propiedadParaOrdenar] > b[propiedadParaOrdenar] ){
            return -1
        }
        if( a[propiedadParaOrdenar] < b[propiedadParaOrdenar] ){
            return 1 
        }
        return 0
    } )

    if( valorBooleano ){
        ordenadas.reverse()
    }

    return ordenadas.slice( 0, 10 )
} 


console.log( filtrarCervezas( beers, "abv", false ) )

/* 

Generar una función que reciba como parámetro un array de cervezas 
y un id de un elemento HTML donde se imprimirá la tabla. 
La función debe renderizar (renderizar, dibujar, pintar, llenar, etc) en un archivo html
una tabla que contenga las columnas "Name", "ABV", "IBU", y una fila por cada elemento del array. 
Cada fila debe tener los datos que se piden de cada una de las cervezas.
*/
/* id del tbody -> idTbody */
function imprimirTabla( listaCervezas, id ) {
    /* const fragment = document.createDocumentFragment()

    listaCervezas.forEach( cerveza => {
        const tr = document.createElement( 'tr' )
        tr.innerHTML = `
            <td> ${cerveza.name} </td>
            <td> ${cerveza.abv} </td>
            <td> ${cerveza.ibu} </td>
        `
        fragment.appendChild( tr )
    } )

    const element = document.getElementById( id )
    element.appendChild( fragment ) */
    let template = ""
    listaCervezas.forEach( cerveza => {
        
       template += `
       <tr>
            <td> ${cerveza.name} </td>
            <td> ${cerveza.abv} </td>
            <td> ${cerveza.ibu} </td>
            </tr>
        `
    } )
    const element = document.getElementById( id )
    element.innerHTML = template
}

imprimirTabla( filtrarCervezas( beers, 'abv', false ), 'tbody-alcoholicas' )
imprimirTabla( filtrarCervezas( beers, 'ibu', false ), 'tbody-amargas' )