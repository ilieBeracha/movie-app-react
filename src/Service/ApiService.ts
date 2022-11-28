import axios from "axios";
import { config } from "../config/config";
import { MainCast } from "../model/castInterface";
import { MoviesResponse, PopularMoviesInterface } from "../model/PopularMoviesInterface";
import { MainReviews } from "../model/ReviewsInterface";
import { MainUpcomingInterface } from "../model/upcomingMoviesInterface";

class ApiService {
    async getPopularMovies() {
        let movies: MoviesResponse = await (await axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=${config.API_KEY}&language=en-US&page=1`)).data;
        // console.log(movies.results)
        return movies.results;
    }
    async getAllPopularMovies() {
        let filteredArr:any =[] 
        for (let i = 1; i < 100; i++) {
            let movies: MoviesResponse = await (await axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=${config.API_KEY}&language=en-US&page=${i}`)).data;           
            filteredArr.push(...movies.results)
        }
        return filteredArr;
    }

    async getPopularTvShows() {
        let tv: MoviesResponse = await (await axios.get(`https://api.themoviedb.org/3/tv/popular?api_key=${config.API_KEY}&language=en-US&page=1`)).data;
        // console.log(tv.results)
        return tv.results;
    }
    async getAllPopularTvShows() {
        let filteredArr:any =[] 
        for (let i = 1; i < 100; i++) {
            let tv: MoviesResponse = await (await axios.get(`https://api.themoviedb.org/3/tv/popular?api_key=${config.API_KEY}&language=en-US&page=${i}`)).data;            
            filteredArr.push(...tv.results)
        }
        return filteredArr;
    }

    async getMovieGenres() {
        let genre = await (await axios.get(`https://api.themoviedb.org/3/genre/movie/list?api_key=${config.API_KEY}&language=en-US`)).data;
        return genre.genres;
    }
    async getTvGenres() {
        let genre = await (await axios.get(`https://api.themoviedb.org/3/genre/tv/list?api_key=${config.API_KEY}&language=en-US`)).data;
        return genre.genres;
    }

    async getMovieById(movieId: any) {
        let movie = await (await axios.get(`https://api.themoviedb.org/3/movie/${movieId}?api_key=${config.API_KEY}&language=en-US`)).data;
        console.log(movie)
        return movie;
    }

    async getTvById(tvId: any) {
        let tv = await (await axios.get(`https://api.themoviedb.org/3/tv/${tvId}?api_key=${config.API_KEY}&language=en-US`)).data;
        return tv;
    }

    async CastMovie(id: any) {
        let cast: MainCast = await (await axios.get(`https://api.themoviedb.org/3/movie/${id}/credits?api_key=${config.API_KEY}&language=en-US`)).data;
        console.log(cast.cast)
        return cast.cast;
    }

    async CastTv(id: any) {
        let cast: MainCast = await (await axios.get(`https://api.themoviedb.org/3/tv/${id}/credits?api_key=${config.API_KEY}&language=en-US`)).data;
        console.log(cast.cast)
        return cast.cast;
    }

    async upcomingMovies() {
        let movie: MainUpcomingInterface = await (await axios.get(`https://api.themoviedb.org/3/movie/upcoming?api_key=${config.API_KEY}&language=en-US&page=1`)).data;
        return movie.results;
    }

    async getMovieReviews(movieId: any) {
        let movie: MainReviews = await (await axios.get(`https://api.themoviedb.org/3/movie/${movieId}/reviews?api_key=${config.API_KEY}&language=en-US&page=1`)).data;
        return movie.results;
    }

    async getTvReviews(tvId: any) {
        let tv: MainReviews = await (await axios.get(`https://api.themoviedb.org/3/tv/${tvId}/reviews?api_key=${config.API_KEY}&language=en-US&page=1`)).data;
        return tv.results;
    }
}

export const apiService = new ApiService;