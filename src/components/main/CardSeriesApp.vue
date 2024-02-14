<script>

import StarRating from 'vue-star-rating'

export default {
    name: "CardSeriesApp",
    components:{
        StarRating
    },
    props: {
        series: Object,
        seriesImageApi: String,
    },
    methods: {
        getStars(){
        // console.log("propsVoteAverage:", this.propsVoteAverage);
        return Math.ceil(this.series.vote_average / 2)
        }
    }
}

</script>

<template>
    <div class="col-2">  
        <img :src="seriesImageApi + `w500` + series.poster_path" alt="">
        <p><span class="fw-bold">Title:</span>  {{ series.name }}</p>
        <p><span class="fw-bold">Original title:</span>  {{ series.original_name }}</p>
        <!-- <p><span class="fw-bold">Release Date: </span>{{  }}</p> -->
        <p><span class="fw-bold">Overview:  </span>{{ series.overview }}</p>
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