<template>
  
</template>

<script>
export default {
    created:function(){

    },
    methods:{
        consultarPelis(){
            fetch('http://localhost:3000/peliculas');
        }
    }
}
</script>

<style>

</style>