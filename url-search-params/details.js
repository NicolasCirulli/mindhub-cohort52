const search = location.search

const params = new URLSearchParams( search )

const nombre = params.get( "nombre" ) 
const edad = params.get( "edad" ) 
const rol = params.get( "rol" ) 

const lista = document.getElementById('lista')

lista.innerHTML = `
    <li> nombre : ${nombre} </li>
    <li> edad : ${edad} </li>
    <li> rol : ${rol} </li>
`