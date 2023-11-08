/* const btn = document.getElementById('btn')
const spanContador = document.getElementById('contador')

let contador = 1
spanContador.textContent = contador
const handleClick = () => {
    console.log('click')
    contador++
    spanContador.textContent = contador
}
btn.addEventListener('click', handleClick )
let intervalId
 */
/* btn.addEventListener( 'mousedown', () => {
    console.log('mousedown')
    intervalId = setInterval(()=> {
        contador--
        spanContador.textContent = contador
    }, 1000)
} )

btn.addEventListener( 'mouseup', () => {
    console.log('mouseup')
   clearInterval( intervalId )
} )

btn.addEventListener( 'dblclick', () => {
    console.log('dblclick')
} )
 */

const contenedorMentores = document.getElementById("contenedor-mentores")
const formulario = document.getElementById('formulario')
const nombreForm = document.getElementById('nombre-js')
const apodoMentor = document.getElementById('apodo-js')
const tecnologiasMentor = document.getElementById('tecnologias-js')
const color = document.getElementById('color-js')

let nuevosMentores = [
    {
        nombre :"Nicolas",
        apodo : "Nico",
        tecnologia : "Javascript",
        color: "",
        id : 1
    },
    {
        nombre :"Martin",
        apodo : "Tino",
        tecnologia : "Java",
        color: "",
        id : 2
    }
]
let idMentor = 2


imprimirTarjetas( nuevosMentores, contenedorMentores )

formulario.addEventListener( 'submit', (event) => {
    event.preventDefault()

    let mentor = {
        nombre : nombreForm.value,
        apodo : apodoMentor.value,
        tecnologia : tecnologiasMentor.value,
        color: color.value,
        id : ++idMentor
    }
    nombreForm.value = ""
    apodoMentor.value = ""
    tecnologiasMentor.value = "JS"
    color.value = ""
    nuevosMentores.push( mentor )
    imprimirTarjetas( nuevosMentores, contenedorMentores )
} )

contenedorMentores.addEventListener( 'click', (event) => {
    let button = event.target
    if( button.tagName == "BUTTON"){
        button.parentElement.remove()
    }
} )


function imprimirTarjetas( listaMentores, contenedor ){
    let template = ""
    for (const mentor of listaMentores) {
        template += crearTarjeta( mentor )
    }
    contenedor.innerHTML = template
}

function crearTarjeta(mentor) {
    return ` <div class="border flex flex-col gap-3 p-5">
            <h3>nombre:${mentor.nombre}</h3>
            <p>apodo: ${mentor.apodo}</p>
            <p>tecnologia : ${mentor.tecnologia}</p>
            <button class="p-2 border"> x </button>
        </div>`
}



/* 
      

*/