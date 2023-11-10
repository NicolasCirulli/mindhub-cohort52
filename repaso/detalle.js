const search = location.search

const params = new URLSearchParams( search )

const id = params.get('id') 

const agente = agentes.data.find( agente => agente.uuid == id )

const contenedor = document.getElementById('contenedor')

contenedor.innerHTML = `<article class="w-10/12 border flex flex-col gap-5 bg-white text-zinc-900 rounded px-5 pb-5">
<img class="h-[70%]" src="${agente.fullPortrait}" alt="">
<h2 class="text-center">${agente.displayName}</h2>
<p> ${agente.description} </p> 
<p class="">${agente.role.displayName}</p>

</article>`

