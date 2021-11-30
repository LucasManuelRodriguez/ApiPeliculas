<template>
    <div>
        <button @click="removeMovie(index)">Delete</button>
    </div>
</template>

<script>
export default {
    name:'RemoveList',
    methods:{
    removeMovie(index){
            this.movies.splice(index,1);
        }
    }
}
</script>

<style>

</style>