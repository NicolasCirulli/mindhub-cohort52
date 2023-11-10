import { imprimirTemplate, crearCheckbox, crearTarjeta, filtrarPorNombre, filtrarPorRol } from './module/funciones.js'

const contenedor = document.getElementById( 'contenedor' )
const inputBusqueda = document.getElementById('inputBusqueda')
const checkboxContainer = document.getElementById('contenedorCheckboxes')

const agentesJugables = agentes.data.filter( agente => agente.isPlayableCharacter )
const rolesConRepetidos = agentesJugables.map( agente => agente.role.displayName ) 
const rolesSet = new Set( rolesConRepetidos )

imprimirTemplate( rolesSet, checkboxContainer, crearCheckbox )  
imprimirTemplate( agentesJugables, contenedor, crearTarjeta )

inputBusqueda.addEventListener( 'input', () => {
    const checkboxes = [ ...document.querySelectorAll( 'input[type="checkbox"]:checked' ) ]
    const values = checkboxes.map( check => check.value )
    // filtro por rol
    const filtradoPorRol = filtrarPorRol( agentesJugables, values )
    // lo que fue filtrado por rol, ahora lo filtro por nombre
    const filtradoPorNombre = filtrarPorNombre( filtradoPorRol, inputBusqueda.value )
    // imprimo el resultado de los 2 filtros
    imprimirTemplate( filtradoPorNombre, contenedor, crearTarjeta )
} )

checkboxContainer.addEventListener( 'input', (e) => {
    const checkboxes = [ ...document.querySelectorAll( 'input[type="checkbox"]:checked' ) ]
    const values = checkboxes.map( check => check.value )
    // filtro por rol
    const filtradoPorRol = filtrarPorRol( agentesJugables, values )
    // lo que fue filtrado por rol, ahora lo filtro por nombre
    const filtradoPorNombre = filtrarPorNombre( filtradoPorRol, inputBusqueda.value )
    // imprimo el resultado de los 2 filtros
    imprimirTemplate( filtradoPorNombre, contenedor, crearTarjeta )
} )



