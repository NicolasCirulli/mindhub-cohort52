import { imprimirNotas } from './module/funciones.js'
const contenedor = document.getElementById('contenedor-js')

const notas = JSON.parse( localStorage.getItem('notas') ) || []

imprimirNotas( notas, contenedor ) 