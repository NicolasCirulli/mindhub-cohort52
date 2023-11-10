export const sumar = (...numeros) => {
    console.log( numeros )
    let resultado = 0
    for (const numero of numeros) {
        resultado += numero
    }
    return resultado
}
export function crearMensaje( { nombre, edad } ){
    return `Hola soy ${nombre} y tengo ${edad} años`
}