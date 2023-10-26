// Valores Truthy y Falsy.

// Valores Falsy comunes.
// "" (String vacío)
// console.log(Boolean(""))
// // 0 
// console.log(Boolean(0))
// // NaN (Not a number)
// console.log(Boolean(NaN))

// // undefined
// console.log(Boolean(undefined))

// // null 
// console.log(Boolean(null))
// //false
// console.log(Boolean(false))

// let nombre;
// console.log(Boolean(nombre))


// let esDia = prompt("Es de día?")

// if(esDia == "si") {
//     alert("Puedes salir")
// }
// else {
//     alert("No, no puedes salir")
// }



// Utilizamos condicionales para saber si el número es cero, si es positivo o si es negativo.

// let numero = Number(prompt("Escriba un número"))

// if(numero === 0) {
//     alert("El número es 0")
// }
// else if (numero > 20) {
//     alert("El número mayor a 20")
// }
// else if (numero < 20){
//     alert("El número es menor a 20")
// }
// else {
//     alert("El número es positivo")
// }

// Tabla de la verdad.

// Operadores Lógicos 
// AND / &&  
// OR / ||  
//  ! / NOT

// Operador lógico &&
// true && true = true
// true && false = false
// false && false = false

// Operador lógico ||

// true || true = true
// true || false =  true
// false || false = false

// Operador lógico !
// b = false
// !b = true

// b = true
// !b = false



// Ejercicio operador AND

// const numero = 20

// if (numero > 5 && numero < 10) {
//     alert("El número está entre 5 y 10")
// }
//  else if (numero === 20) {
//      alert("El número es 20")
//  }
// else {
//     alert("El número NO está entre 5 y 10")
// }

// Vamos a generar una condicional para saber si es día de bootcamp o es día libre.

// let dia = prompt("Escribe que día es hoy")
// let esFestivo = true

// if (dia === "sabado" || dia === "domingo" || esFestivo) {
//     alert("No hay Bootcamp, es día libre")
// }
// else {
//     alert("Hay bootcamp")
// }

//if anidado

// Consigna: vamos a un lugar y podemos o no tener boleto inicialmente.
// En caso de no tener puedo comprarlo.

// let boleto = prompt("Tiene boleto?")

// if(boleto === "no") {
//     let boleto2 = prompt("Si no tiene boleto no puede pasar, desea comprar uno?")
//     if (boleto2 == "si") {
//         alert("Gracias por comprar tu boleto, puedes pasar")
//     }
//     else if (boleto2 == "no") {
//         alert("Como no tenias boleto y no compraste uno, no puedes pasar")
//     }
//     else {
//         alert("señor/a diga algo coherente")
//     }
// }
// else {
//     alert("Tienes boleto, puedes pasar")
// }


// switch 
let idioma = prompt("Ingrese su idioma")

switch (idioma) {
    case "Español":
        alert("Bienvenido a nuestro sitio web")
    break
    case "Inglés":
        alert("Welcome to our web site")
    break
    case "Japonés":
        alert("Okaeri")
    break
    default:
        alert("Idioma no disponible en el momento.")
}

