export const crearNota = ( titulo, descripcion, id ) => {
    const nota = {
        titulo : titulo,
        descripcion : descripcion,
        id : id
    }
    return nota
}

export const crearArticle = ( nota ) => {
    return `<article class="w-1/3 max-w-[300px] bg-white p-5 rounded relative">
    <h2 class="font-bold">${nota.titulo}</h2>
    <p class="">${nota.descripcion}</p>
    <button class="bg-red-600 text-white py-2 px-5 font-semibold rounded" data-accion="borrar" data-id="${nota.id}" > borrar nota </button>
    <button class="bg-green-700 text-white py-2 px-5 font-semibold rounded" data-accion="editar" data-id="${nota.id}" > editar nota </button>
</article> `
}

export const imprimirNotas = ( listaNotas, contenedor ) => {
    let aux = ""
    for (const nota of listaNotas) {
        aux += crearArticle( nota )
    }
    if( aux ){
        contenedor.innerHTML = aux
    }else{
        contenedor.innerHTML = `<h2> todavía no hay notas </h2>`
    }
}