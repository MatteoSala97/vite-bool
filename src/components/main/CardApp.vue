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
        "PropsVoteAverage",
    ],
    data(){
        return{
                store,
            }
        },
        methods: {
            getStars(){
                let stars = Math.ceil(this.propsVoteAverage / 2)
                console.log(stars)
            }
        },
        created(){
            this.getStars()
        }
    }

</script>

<template>
    <div class="col-2 position-relative">  
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
        :rating="0.01"
        :animate="true"
        />
        </p>
    </div>
</template>



<style lang="scss" scoped>

</style>