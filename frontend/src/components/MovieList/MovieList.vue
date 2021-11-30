<template>
  <div>
      <h1>Lista de Pelis</h1>
      <ul>
          <li v-for="(movie, index) in movies" :key='index'>{{movie.title}}<button @click="removeMovie(index)">Delete</button></li>
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
            if(!this.newMovie.title) return;
            this.movies = [...this.movies, this.newMovie];
            this.newMovie = {};
        },
        removeMovie(index){
            this.movies.splice(index,1);
            this.newMovie={};
        }
    },
}
</script>

<style>
ul{
    list-style: none;
}
</style>