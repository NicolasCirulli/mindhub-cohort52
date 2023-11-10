export function filtrarPorRol( listaAgentes, rolesSeleccionados ){
    if( rolesSeleccionados.length > 0 ){
        const filtrado = listaAgentes.filter( agente => rolesSeleccionados.includes( agente.role.displayName ) )
        return filtrado
    }else{
        return listaAgentes
    }
}
export function filtrarPorNombre( listaAgentes, nombre ){
    
    const filtro = listaAgentes.filter( agente => agente.displayName.toLowerCase().startsWith( nombre.toLowerCase() )  )
    return filtro
    
}
export function crearTemplate( listaAgentes ){
    let template = ""
    for (const agente of listaAgentes) {
        template += crearTarjeta( agente )
    }
    return template
}
export function crearTarjeta( agente ){
    return `<article class="w-[400px] h-[600px] border flex flex-col gap-5 bg-white text-zinc-900 rounded px-5 pb-5">
    <img class="h-[70%]" src="${agente.fullPortrait}" alt="">
    <h2 class="text-center">${agente.displayName}</h2>
    <p class="">${agente.description}</p>
    <a href="./detalle.html?id=${agente.uuid}" class="border bg-blue-500 text-white p-3 w-2/4 self-center rounded text-center"  > ir a detalle</a>
</article>`
}
export function imprimirTemplate( lista, donde, fn ) {
    let template = ""
    for (const elementoIterado of lista) {
        template += fn( elementoIterado )
    }
    if( template ){
        donde.innerHTML = template
    }else{
        donde.innerHTML = `<h2 class="text-white"> No hay resultados </h2> `
    }
}
export function crearCheckbox( rolParametro ){
    return `<label class=""> ${rolParametro}
    <input type="checkbox" name="rol" value="${rolParametro}">
</label>`
}

export default {
    filtrarPorNombre,
    filtrarPorRol,
    crearTemplate, 
    crearTarjeta,
    imprimirTemplate,
    crearCheckbox
}