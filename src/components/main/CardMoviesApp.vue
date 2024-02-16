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
            return Math.ceil(this.movie.vote_average / 2)
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
            id="poster"
            :src="moviesImageApi + `w342` + movie.poster_path" 
            alt="Poster Image">
            <div class="poster-overlay position-absolute ">
                <p><span class="fw-bold">Title:</span>  {{ movie.title }}</p>
                <p><span class="fw-bold">Original Title:</span>  {{ movie.original_title }}</p>
                <figure>
                    <span class="fw-bold">Language: </span>
                    <img 
                    :src="`https://flagsapi.com/${flagsSwitcher(movie.original_language).toUpperCase()}/flat/24.png`"
                    :alt="movie.original_language">
                </figure>
                <span class="fw-bold">Overview:</span> <p id="overview"> {{ movie.overview }} </p>
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
        </div>
    </div>
</template>

<style lang="scss" scoped>
    .col-2{

    #poster{
        min-height: 600px;
        width: 400px;
    }
    
    .poster-overlay{
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.5);
        color: #fff;
        padding: 20px;
        opacity: 0;
        transition: opacity 0.3s;
        overflow-y: auto;
    }
    .poster-container:hover .poster-overlay{
        opacity:1;
    }
    #overview{
        font-size: 20px;
    }
}
</style>