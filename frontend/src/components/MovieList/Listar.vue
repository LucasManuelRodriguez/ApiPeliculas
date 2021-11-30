<template>
    <div class="box-cards">
        <div v-for="pelicula in peliculas" :key="pelicula.id" class="card" style="width: 18rem;">
            <img :src="pelicula.image" class="card-img-top" alt="pelicula">
            <div class="card-body">
                <h5 class="card-title">{{pelicula.nombre}}</h5>
                <p class="card-text">{{pelicula.description}}</p>
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
.box-cards{
    display:flex;
    flex-flow: row wrap;
    justify-content: space-around;
}

</style>