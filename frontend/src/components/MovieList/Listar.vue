<template>
  
</template>

<script>
export default {
    created:function(){
        this.consultarPelis();
    },
    methods:{
        consultarPelis(){
            fetch('http://localhost:3000/peliculas')
            .then(res=>res.json())
            .then((datosRespuesta)=>{
                console.log(datosRespuesta)
            })
            .catch(console.log);
        }
    }
}
</script>

<style>

</style>