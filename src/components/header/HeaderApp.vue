<script>
import axios from 'axios'
import { store } from '../../store'
    
    export default{
            name:"HeaderApp",
            data(){
                return{
                    store,
                }
            },
            methods: {
                getData(){
                    // this call gets movies
                    axios.get(store.apiUrlMovies + `${store.searchText}`).then( ( res ) => {
                        console.log(res.data.results)
                        store.movies = res.data.results
                        console.log(store.movies)
                    })

                    // this call gets tv series
                    axios.get(store.apiUrlSeries + `${store.searchText}`).then( ( res ) => {
                        console.log(res.data.results)
                        store.series = res.data.results
                        console.log(store.series)
                    })
                },
            },
            created(){
                // this.getMovies()
                // this.getSeries()
            } 
        }
    
</script>

<template>
    <div class="container-fluid d-flex justify-content-between align-items-center py-3 border-bottom ">
        <div class="d-flex align-items-center gap-4">
            <a href="#"><img src="../../assets/img/logo.png" alt="Boolflix logo"></a>
            <ul class="d-flex gap-3">
                <li><a href="#">Home</a></li>
                <li><a href="#">Tv Series</a></li>
                <li><a href="#">Movies</a></li>
                <li><a href="#">Originals</a></li>
                <li><a href="#">Recently added</a></li>
                <li><a href="#">My list</a></li>
            </ul>
        </div>
        <div class="d-flex gap-3">

            <input
                type="text"
                class="form-control"
                name=""
                id="search-bar"
                aria-describedby="helpId"
                placeholder="Titles, people, genres"
                v-model="store.searchText"
                @keyup.enter="getData"
            />
            <input
                name="search-button"
                id="search-button"
                class="btn btn-outline-danger"
                type="button"
                value="Search"
                @click="getData"
            />
            
        </div>
        
    </div>
</template>

<style lang="scss" scoped>
@use "../../assets/styles/styles.scss";

    div{    
        img{
            width: 250px;
        }
        input#search-bar{
            width: 400px;
        }
    }
    
    *{
        color: #fff;
    }
    
</style>
