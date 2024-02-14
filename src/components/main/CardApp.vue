<script>

import {store} from '../../store'
import axios from 'axios'
import StarRating from 'vue-star-rating'

export default {
    name: "CardApp",
    components:{StarRating},
    props:[
        "propsApiUrl",
        "propsMovieTitle",
        "propsOriginalTitle",
        "propsMovieOverview",
        "propsVoteAverage",
        "propsPoster",
        "propsBackdropPoster",
        "propsImageApi"
    ],
    data(){
        return{
                store,
            }
        },
        methods: {
            getStars(){
            // console.log("propsVoteAverage:", this.propsVoteAverage);
            return Math.ceil(this.propsVoteAverage / 2)
            }
        },
        created(){
            // console.log("propsVoteAverage in created hook:", this.propsVoteAverage);
        }
    }

</script>

<template>
    <div class="col-2">  
        <img :src="propsImageApi + `w500` + propsPoster" alt="">
        <p><span class="fw-bold">Title:</span>  {{ propsMovieTitle }}</p>
        <p><span class="fw-bold">Original title:</span>  {{ propsOriginalTitle }}</p>
        <!-- <p><span class="fw-bold">Release Date: </span>{{  }}</p> -->
        <p><span class="fw-bold">Overview:  </span>{{ propsMovieOverview }}</p>
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