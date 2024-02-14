<script>

import StarRating from 'vue-star-rating'

export default {
    name: "CardMoviesApp",
    components:{
        StarRating
    },
    props: {
        movie: Object,
        moviesImageApi: String,
    },
    methods: {
        getStars(){
            return Math.ceil(this.movies.avote_average / 2)
        }
    },
}

</script>

<template>
    <div class="col-2">  
        <img :src="moviesImageApi + `w500` + movie.poster_path" alt="">
        <p><span class="fw-bold">Title:</span>  {{ movie.title }}</p>
        <p><span class="fw-bold">Original title:</span>  {{ movie.original_title }}</p>
        <!-- <p><span class="fw-bold">Release Date: </span>{{  }}</p> -->
        <p><span class="fw-bold">Overview:  </span>{{ movie.overview }}</p>
        <p><span class="fw-bold">
            Rating: 
        </span>
        <StarRating
        :star-size="15"
        :read-only="true"
        :glow="10"
        :rating="getStars()"
        :animate="true"
        />
        </p>
    </div>
</template>

<style lang="scss" scoped>

</style>