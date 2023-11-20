const url = "https://valorant-api.com/v1/agents"
const { createApp } = Vue

const options = {
    data(){
        return {
            agentes:[],
            agentesFiltrados : [],
            roles: [],
            search : "",
            selected : "all"
        }
    },
    beforeCreate(){
        fetch( "https://valorant-api.com/v1/agents" )
            .then( res => res.json() )
            .then( ( parametro ) => {
                this.agentes = parametro.data.filter( agente => agente.isPlayableCharacter )
                this.agentesFiltrados = this.agentes
                this.roles = [...new Set( this.agentes.map( agente => agente.role.displayName ) )]
            } )
            .catch( err => console.log(err) )   
    },
    methods:{
        guardarSearch(event){
            this.search = event.target.value 
        },
        guardarSelect(event){
            this.selected = event.target.value
        },
        filtrar(){
            const aux = this.agentes.filter( agente => agente.displayName.toLowerCase().includes( this.search.toLowerCase() ) && (this.selected == "all" || agente.role.displayName == this.selected )  )
            this.agentesFiltrados = aux
        }
    }
}

const app = createApp( options )
app.mount( "#app" )

