const ejercicioUno = `Utilizando el bucle que creas correcto, realizar un programa que reciba un 
número a través de un prompt y muestre por consola todos sus divisores.
Por ejemplo 12 / 4 ,resultado es 3  y sobra 0 .  
Cuando un número que divide a otro produce un resto 0, se dice que es divisor del número dividido
Supongamos que se ingresó 50. Este sería el resultado.`

const ejercicioDos = `Crear un programa que permita el ingreso de un dato:
piedra
papel
tijera
a 2 jugadores y muestre en pantalla:
Si ganó el jugador 1
Si ganó el jugador 2
Si empataron
En caso de empate ambos jugadores deben volver a ingresar sus elecciones.
En caso de algún ingreso incorrecto mostrar por pantalla que uno de los jugadores ha hecho trampa.
Tip! Piedra la gana a tijera, papel le gana a piedra, tijera le gana a papel.`

const ejercicioTres = `Crea una función ( declárala como tu quieras ) 
para verificar un día que reciba un parámetro numérico 
y retorne un mensaje que indique si es un día laboral o no. 
Si el número es 1, 2, 3, 4, 5,  mensaje: "Es un día laboral". 
Si el número es 6 o 7, mensaje: "Es fin de semana". 
Utiliza la estructura de control switch anidada para implementar esta función. 
Llama a la función con diferentes valores de día para verificar que funcione correctamente. `

function mostrarDivisores(numero){
    for (let i = 1; i <= numero ; i++) {
        if( numero % i == 0 ){
            console.log(i)
        }
    }
}
/* mostrarDivisores( 50 ) */

let jugadorUno = "tijera"
let jugadorDos = "tijera"

function piedraPapelTijera( jugadorUno, jugadorDos ){
    
    const posibilidades = [ "piedra", "papel" , "tijera"]

    if( !posibilidades.includes( jugadorUno ) ){
        console.log('Jugador uno hizo trampa')
        return
    }
    if( !posibilidades.includes( jugadorDos ) ){
        console.log('Jugador dos hizo trampa')
        return
    }

    const primeraChance = jugadorUno == "piedra" && jugadorDos == "tijera"
    const segundaChance = jugadorUno == "papel" && jugadorDos == "piedra"
    const terceraChance = jugadorUno == "tijera" && jugadorDos == "papel"
    
    if( jugadorUno == jugadorDos ){
        console.log('empate')
        let aux = prompt('jugador uno')
        let aux2 = prompt('jugador dos')
        piedraPapelTijera( aux, aux2 )
    }else if( primeraChance || segundaChance || terceraChance ){
        console.log( 'gano el jugador uno' )
    }else{
        console.log( 'gano el jugador dos' )
    }
}

/* piedraPapelTijera( jugadorUno, jugadorDos ) */

function verificarDia( numeroDia ){
    switch ( numeroDia ) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
            console.log( 'Es día laboral' )
            break;
        case 6:
        case 7:
            console.log( "Es fin de semana" )
            break;
        default:
            console.log('Dia invalido')
            break;
    }
} 


const contenedor = document.getElementById( 'contenedor' )

const agentesJugables = agentes.data.filter( agente => agente.isPlayableCharacter )

contenedor.innerHTML += crearTemplate( agentesJugables)

function crearTemplate( listaAgentes ){
    let template = ""
    for (const agente of listaAgentes) {
        template += crearTarjeta( agente )
    }
    return template
}

function crearTarjeta( agente ){
    return `<article class="w-[400px] h-[600px] border flex flex-col gap-5 bg-white text-zinc-900 rounded px-5 pb-5">
    <img class="h-[70%]" src="${agente.fullPortrait}" alt="">
    <h2 class="text-center">${agente.displayName}</h2>
    <p class="">${agente.description}</p>
</article>`
}

