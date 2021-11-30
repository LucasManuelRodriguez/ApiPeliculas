<template>
  <div>
      <h1>Lista de Pelis</h1>
      <ul>
          <li v-for="(movie, index) in movies" :key='index'>{{movie.title}}</li>
      </ul>
      <input type="text" v-model="newMovie">
      <p>{{newMovie}}</p>
  </div>
</template>

<script>
export default {
    data(){
        return{
            newMovie:'',
            movies:[{title:'Batman'},{title:'Sherk'}],
        }
    }
}
</script>

<style>
ul{
    list-style: none;
}
</style>