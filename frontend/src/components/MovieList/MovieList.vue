<template>
  <div>
      <h1>Lista de Pelis</h1>
      <ul>
          <li v-for="(movie, index) in movies" :key='index'>{{movie.title}}</li>
      </ul>
      <input type="text" v-model="newMovie.title">
      <button @click="addMovie">Add</button>
      <p>{{newMovie.title}}</p>
  </div>
</template>

<script>
export default {
    data(){
        return{
            newMovie:{},
            movies:[{title:'Batman'},{title:'Sherk'}],
        };
    },
    methods:{
        addMovie(){
            this.movies.push(this.newMovie);
        },
    },
}
</script>

<style>
ul{
    list-style: none;
}
</style>