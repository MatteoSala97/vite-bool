import {reactive} from 'vue'
export const store = reactive({
    searchText: [],
    apiUrl: "https://api.themoviedb.org/3/search/movie?api_key=ed8922d356fa3bff26eccb788ed33b80&query=",
    movies: [],
    series: [],
});