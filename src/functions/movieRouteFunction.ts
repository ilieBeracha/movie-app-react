import { PopularMoviesInterface } from "../model/PopularMoviesInterface";
import { apiService } from "../Service/ApiService";

class MovieRouteFunction {
    async getMoviesByGenre(genId: number, setMovies: any) {
        let filteredPopular: PopularMoviesInterface[] = []
        filteredPopular = await apiService.getAllPopularMovies();
        filteredPopular = filteredPopular.filter(res => res.genre_ids.includes(genId));
        setMovies(filteredPopular)
        // console.log(filteredPopular);
    }

    async  filterByVoteAverage(setMovies:any) {
        let filteredArr: PopularMoviesInterface[] = [];
        filteredArr = await apiService.getAllPopularMovies()
        filteredArr = filteredArr.sort((a, b) => b.vote_average - a.vote_average);
        setMovies(filteredArr)
    }

    async searchMovie(query: string,setMovies:any) {
        let filteredArr: PopularMoviesInterface[] = [];
        filteredArr = await apiService.getAllPopularMovies();
        filteredArr = filteredArr.filter(movie => (movie.title).toLocaleLowerCase().includes(query.toLocaleLowerCase()));
        console.log(filteredArr)
        setMovies(filteredArr)
    }
}

export const movieRouteFunction = new MovieRouteFunction;