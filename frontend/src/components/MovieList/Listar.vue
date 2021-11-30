<template>
    <div>
        <div v-for="pelicula in peliculas" :key="pelicula.id" class="card" style="width: 18rem;">
            <h2>{{pelicula.nombre}}</h2>
            <div class="card-body">
                <h5>{{pelicula.director}}</h5>
                <p class="card-text">{{pelicula.clasificacion}}</p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return{
            peliculas:[],
        }
    },
    created:function(){
        this.consultarPelis();
    },
    methods:{
        consultarPelis(){
            fetch('http://localhost:3000/peliculas')
            .then(res=>res.json())
            .then((datosRespuesta)=>{
                console.log(datosRespuesta)
                this.peliculas=[]
                if(typeof datosRespuesta[0].success==='undefined'){
                    this.peliculas=datosRespuesta;
                }
            })
            .catch(console.log);
        }
    }
}
</script>

<style>

</style>