// DOM

// metodos para obtener referencias

const mainPorId = document.getElementById( 'contenedor-main' )
const mainPorClass = document.querySelector( '.contendor-main' )
const mainPorEtiqueta = document.querySelector( 'main' )
const mainPorIdConQuerySelector = document.querySelector( '#contenedor-main' )

const enlaces = document.querySelectorAll( '.anchor' )


// propiedades principales
const h1 = document.querySelector( 'main h1' )

// para ver o modificar las clases 
// className 
h1.className = "font-semibold"

// classList
/* console.log( h1.classList ) */
const color = "text-blue-500" /* prompt( 'Ingrese una clase de tailwind' ) */
h1.classList.add( color )

// textContent

const nombreIngresado = "Nicolas" /* prompt('ingrese su nombre') */

h1.textContent += ` ${nombreIngresado}`

// innerHTML

// Crear nodos 


console.log( mentores )

function crearArticulo( mentor ){
    const article = document.createElement( "article" )

    article.className = "flex flex-col p-2 w-9/12 h-[500px]"

    article.innerHTML = `
            <img class="w-full h-3/4 object-cover" src="${mentor.imagen}" alt="">
            <h2>${mentor.nombre}</h2>
            <p>edad: ${mentor.edad}</p>
    `
    return article
}

function pintarArticulos( listaMentores, contenedor ){
    
    const fragment = document.createDocumentFragment()
   /*  const div = document.createElement('div') */

    for( const mentor of listaMentores ){
         const article = crearArticulo( mentor )
         fragment.appendChild( article ) 
    }

    // Agregar nodo al dom
    contenedor.appendChild( fragment )
}


pintarArticulos( mentores, mainPorId )


/* 
 <article class="flex flex-col p-2 w-9/12 h-[500px]">
                <img class="w-full h-3/4 object-cover" src="https://i.postimg.cc/Y2vWzKJQ/34040eea-fbd9-4a60-8a61-6afba83464a8.jpg" alt="">
                <h2>Nico</h2>
                <p>edad: 29</p>
</article>

*/


