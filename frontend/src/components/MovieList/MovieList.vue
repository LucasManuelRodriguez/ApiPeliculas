<template>
  <div>
      <h1>Lista de Pelis</h1>
      <ul>
          <li v-for="(movie, index) in movies" :key="index">
              {{index}}-{{movie.title}}
              <button @click="removeMovie(index)">Delete</button>
              <button @click="editMovie(index)">Edit</button>
          </li>
      </ul>
      <input type="text" v-model="newMovie.title" />
      <button v-if="mode =='add'" @click="addMovie">Add</button>
      <button v-if="mode == 'edit'" @click="updateMovie">Update</button>
      <p>{{newMovie.index}}-{{newMovie.title}}</p>
  </div>
</template>

<script>
export default {
    data(){
        return{
            indexToUpdate:"",
            mode:"add",
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
        },
        editMovie(index){
            this.mode='edit';
            this.newMovie = this.movies[index];
            this.newMovie.index = index;
        },
        updateMovie(){
            this.movies[this.indexToUpdate]= this.newMovie;
            this.newMovie={};
            this.mode='add';
        }
    },
}
</script>

<style>
ul{
    list-style: none;
}
</style>