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
        },

        flagsSwitcher(language){
        switch (language) {
            case 'en':
                return 'us'
            case 'ja':
                return 'jp'
            case 'he':
                return 'il'
            case 'zh':
                return 'cn'
            case 'ko':
                return 'kr'
            case 'hi':
                return 'in'
            default:
                return language
            }
        }
    }
}

</script>

<template>
    <div class="col-2 my-5">  
        <div class="poster-container position-relative">
            <img 
            :src="seriesImageApi + `w342` + series.poster_path" 
            alt=""
            id="poster">
            <div class="poster-overlay position-absolute">
                <p><span class="fw-bold">Title:</span>  {{ series.name }}</p>
                <p><span class="fw-bold">Original Title:</span>  {{ series.original_name }}</p>
                <!-- <p><span class="fw-bold">Release Date: </span>{{  }}</p> -->
                <figure>
                    <img 
                    :src="`https://flagsapi.com/${flagsSwitcher(series.original_language).toUpperCase()}/flat/24.png`"
                    :alt="series.original_language">
                </figure>
                <span class="fw-bold">Overview: </span> <p id="overview"> {{ series.overview }} </p>
                <p><span class="fw-bold">
                    Rating: 
                </span>
                <StarRating
                :star-size="15"
                :read-only="true"
                :glow="5"
                :rating="getStars()"
                :animate="true"
                />
                </p>
            </div>
        </div>
    </div>
</template>



<style lang="scss" scoped>
.col-2{
    #poster{
        height: 600px;
        width: 400px;
    }
    .poster-overlay{
        top: 0px;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.5);
        color: #fff;
        padding: 20px;
        opacity: 0;
        transition: opacity 0.3s;
    }
    .poster-container:hover .poster-overlay{
        opacity:1;
    }
    #overview{
        font-size: 14px;
    }
}
</style>