const { createApp } = Vue

const options = {
    // metodo que retorna las propiedades reactivas
    data(){
        return {
            agentes:[],
            agentesFiltrados : [],
            roles: [],
            search : "",
            selected : "all"
        }
    },
    // hook de ciclo de vida
    beforeCreate(){
        fetch( "https://valorant-api.com/v1/agents" )
            .then( res => res.json() )
            .then( ( parametro ) => {
                // el this es para hacer referencia a las propiedades que retorna data o propiedades de methods
                this.agentes = parametro.data.filter( agente => agente.isPlayableCharacter )
                this.agentesFiltrados = this.agentes
                this.roles = this.obtenerRoles(this.agentes)
            } )
            .catch( err => console.log(err) )   
    },
    methods:{
        obtenerRoles( agentes ){
            return [...new Set( agentes.map( agente => agente.role.displayName ) )]
        }
    },
    computed:{
        // Se llaman una vez en el html y se vuelven a ejecutar solas cuando cambia alguna de las propiedades reactivas que esta usando
        filtrar(){
            const aux = this.agentes.filter( agente => agente.displayName.toLowerCase().includes( this.search.toLowerCase() ) && (this.selected == "all" || agente.role.displayName == this.selected )  )
            this.agentesFiltrados = aux
        }
    }
}

const app = createApp( options )
app.mount( "#app" )

