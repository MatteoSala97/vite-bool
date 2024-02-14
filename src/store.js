import {reactive} from 'vue'
export const store = reactive({
    searchText: [],
    apiUrlMovies: "https://api.themoviedb.org/3/search/movie?api_key=ed8922d356fa3bff26eccb788ed33b80&query=",
    apiUrlSeries: "https://api.themoviedb.org/3/search/tv?api_key=ed8922d356fa3bff26eccb788ed33b80&query=",
    imageApi: "https://image.tmdb.org/t/p/",
    movies: [],
    series: [],
});