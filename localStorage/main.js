
// JSON -> objeto con los metodos stringify ( para pasar de js a json ) y parse ( para pasar un json a js )
// Response.json() -> extraer el json de la respuesta y pasarlo a js ( devuelve una promesa )
// los archivos que terminan en .json -> es un formato de texto plano

import { crearNota, imprimirNotas } from './module/funciones.js'
const contenedor = document.getElementById('contenedor-js')
const formulario = document.getElementById('formulario-js')
const formularioEditar = document.getElementById('formulario-editar-js')
const titulo = document.getElementById('titulo-js')
const descripcion = document.getElementById('descripcion-js')
const tituloEditar = document.getElementById('titulo-editar-js')
const descripcionEditar = document.getElementById('descripcion-editar-js')
const btnCancelar = document.getElementById( 'btn-cancelar' )
const btnEditar = document.getElementById('btn-editar')


let notas = JSON.parse( localStorage.getItem( 'notas' ) ) || []

let id = 0
imprimirNotas( notas, contenedor )

function handleSubmit( event ){
    event.preventDefault()
    const nuevaNota = crearNota( titulo.value, descripcion.value, id )
    id = id + 1
    notas.push( nuevaNota )
    titulo.value = ""
    descripcion.value = ""
    localStorage.setItem( 'notas', JSON.stringify(notas) )
    imprimirNotas( notas, contenedor )
}

formulario.addEventListener( 'submit', handleSubmit )

btnCancelar.addEventListener( 'click', () => {
    formularioEditar.classList.add( 'hidden' )
    formulario.classList.remove( 'hidden' )
} )

btnEditar.addEventListener( 'click', () => {

    const tituloNuevo = tituloEditar.value 
    const descripcionNueva = descripcionEditar.value 
    const idNota = btnEditar.dataset.nota
    const notaAEditar = notas.find( nota => nota.id == idNota )
    notaAEditar.titulo = tituloNuevo
    notaAEditar.descripcion = descripcionNueva
    localStorage.setItem( 'notas', JSON.stringify(notas) )
    imprimirNotas( notas, contenedor )
    formularioEditar.classList.add( 'hidden' )
    formulario.classList.remove( 'hidden' )
} )

contenedor.addEventListener( 'click', (event) => {
    const dataset = event.target.dataset
    if( dataset.accion == "editar" ){
        console.log( 'Editar la nota con el id ' + dataset.id )
        formularioEditar.classList.remove( 'hidden' )
        formulario.classList.add( 'hidden' )
        const notaAEditar = notas.find( nota => nota.id === Number( dataset.id ) )
        tituloEditar.value = notaAEditar.titulo
        descripcionEditar.value = notaAEditar.descripcion
        btnEditar.dataset.nota = notaAEditar.id
        
    }
    if( dataset.accion == "borrar" ){
        console.log( 'Borrar la nota con el id ' + dataset.id )
        notas = notas.filter( nota => nota.id != dataset.id )
        localStorage.setItem( 'notas', JSON.stringify(notas) )
        imprimirNotas( notas, contenedor )
    }
} )


