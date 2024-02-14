<script>

    import CardApp from '../main/CardApp.vue'
    import {store} from '../../store'
    import axios from 'axios'

    export default {
        components: {
            CardApp
        },
        name: "MainApp",
        data(){
            return{
              store,
              propsApiUrl: String,
              propsMovieTitle: String,
              propsOriginalTitle: String,
              propsMovieOverview: String,
              propsVoteAverage: Number,
              propsPoster: String,
              propsBackdropPoster: String,
              propsImageApi: String,
              }
            },
            methods: {
                
            },
            created(){
                
            }
    }

</script>

<template>
    <div class="container-fluid">
    <div class="row">
      <CardApp 
        v-for="(movie, index) in store.movies"
        :propsApiUrl="store.apiUrl"
        :propsMovieTitle="movie.title"
        :propsOriginalTitle="movie.original_title"
        :propsMovieOverview="movie.overview"
        :propsVoteAverage="movie.vote_average"
        :propsPoster="movie.poster_path"
        :propsImageApi="store.imageApi"
      />
    </div>
  </div>
</template>



<style lang="scss" scoped>

</style>