<script>

import CardMoviesApp from '../main/CardMoviesApp.vue'
import CardSeriesApp from '../main/CardSeriesApp.vue'

import {store} from '../../store'

export default {
    components: {
        CardMoviesApp,
        CardSeriesApp,
    },
    name: "MainApp",
    data(){
        return{
          store,
        }
      },
    }

</script>

<template>
    <div class="container-fluid">

    <div class="row">
      <h2 class="py-3 fs-1">Movies:</h2>
      <CardMoviesApp 
        v-for="(movie, index) in store.movies" 
        :key="'movie-'+index" 
        :movie="movie" 
        :moviesImageApi="store.imageApi"
        />
    </div>
    <div class="row">
        <h2 class="py-3 fs-1">TV Series: </h2>
        <CardSeriesApp
        v-for="(series, index) in store.series"
        :key="'series-' +index"
        :series="series"
        :seriesImageApi="store.imageApi"
        />
      </div>
  </div>
</template>



<style lang="scss" scoped>

</style>