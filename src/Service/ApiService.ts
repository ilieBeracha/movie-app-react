import axios from "axios";
import { config } from "../config/config";
import { MainCast } from "../model/castInterface";
import { MoviesResponse } from "../model/PopularMoviesInterface";
import { MainTvInterface } from "../model/PopularTvShowInterface";
import { MainReviews } from "../model/ReviewsInterface";
import { MainUpcomingInterface } from "../model/upcomingMoviesInterface";
import { MainVideoInteface, VideoInterface } from "../model/videoInterface";

class ApiService {
    // axios.interceptors.request.use(config => {
    //     const token = localStorage.getItem('token');
    //     if (token) {
    //       config.headers.Authorization = `Bearer ${token}`;
    //     }
    //     return config;
    //   });

    async getPopularMovies() {
        let movies: MoviesResponse = await (await axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=${config.API_KEY}&language=en-US&page=1`)).data;
        return movies.results;
    }

    async getAllPopularMovies() {
        let filteredArr: any[] = []
        for (let i = 1; i < 100; i++) {
            let movies: MoviesResponse = await (await axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=${config.API_KEY}&language=en-US&page=${i}`)).data;
            filteredArr.push(...movies.results)
        }
        let duplicateArr: any[] = [];
        let uniqueObject: any = {};
        for (let i in filteredArr) {
            let objTitle = filteredArr[i]['title'];
            uniqueObject[objTitle] = filteredArr[i];
        }
        for (let i in uniqueObject) {
            duplicateArr.push(uniqueObject[i]);
        }
        return duplicateArr;
    }

    async getPopularTvShows() {
        let tv: MoviesResponse = await (await axios.get(`https://api.themoviedb.org/3/tv/popular?api_key=${config.API_KEY}&language=en-US&page=1`)).data;
        return tv.results;
    }
    
    async getAllPopularTvShows() {
        let filteredArr: any[] = []
        for (let i = 1; i < 100; i++) {
            let tv: MoviesResponse = await (await axios.get(`https://api.themoviedb.org/3/tv/popular?api_key=${config.API_KEY}&language=en-US&page=${i}`)).data;
            filteredArr.push(...tv.results)
        }
        let duplicateArr: any[] = [];
        let uniqueObject: any = {};
        for (let i in filteredArr) {
            let objTitle = filteredArr[i]['name'];
            uniqueObject[objTitle] = filteredArr[i];
        }
        for (let i in uniqueObject) {
            duplicateArr.push(uniqueObject[i]);
        }
        return duplicateArr;
    }

    async getTrendingMovie(){
        let trending:MoviesResponse = await (await axios.get(`https://api.themoviedb.org/3/trending/movie/day?api_key=${config.API_KEY}`)).data;
        return trending.results;
    }
    async getTrendingTv(){
        let trending:MoviesResponse = await (await axios.get(`https://api.themoviedb.org/3/trending/tv/day?api_key=${config.API_KEY}`)).data;
        return trending.results;
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
        return movie;
    }

    async getTvById(tvId: any) {
        let tv = await (await axios.get(`https://api.themoviedb.org/3/tv/${tvId}?api_key=${config.API_KEY}&language=en-US`)).data;
        return tv;
    }

    async CastMovie(id: any) {
        let cast: MainCast = await (await axios.get(`https://api.themoviedb.org/3/movie/${id}/credits?api_key=${config.API_KEY}&language=en-US`)).data;
        return cast.cast;
    }

    async CastTv(id: any) {
        let cast: MainCast = await (await axios.get(`https://api.themoviedb.org/3/tv/${id}/credits?api_key=${config.API_KEY}&language=en-US`)).data;
        return cast.cast;
    }

    async getMovieReviews(movieId: any) {
        let movie: MainReviews = await (await axios.get(`https://api.themoviedb.org/3/movie/${movieId}/reviews?api_key=${config.API_KEY}&language=en-US&page=1`)).data;
        return movie.results;
    }

    async getTvReviews(tvId: any) {
        let tv: MainReviews = await (await axios.get(`https://api.themoviedb.org/3/tv/${tvId}/reviews?api_key=${config.API_KEY}&language=en-US&page=1`)).data;
        return tv.results;
    }
    async getVideoMovie(id: any) {
        let filteredArr:VideoInterface[];
        let video: MainVideoInteface = await (await axios.get(`https://api.themoviedb.org/3/movie/${id}/videos?api_key=${config.API_KEY}&language=en-US`)).data;
        filteredArr = video.results.filter(vid=> vid.name.includes('Official'))
        // let video: MainVideoInteface = await (await axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=${config.API_KEY}&append_to_response=videos`)).data;
        // console.log(filteredArr)
        return filteredArr;
    }
    async getVideoTv(id: any) {
        let filteredArr:VideoInterface[];
        let video: MainVideoInteface = await (await axios.get(`https://api.themoviedb.org/3/tv/${id}/videos?api_key=${config.API_KEY}&language=en-US`)).data;
        filteredArr = video.results.filter(vid=> vid.name.includes('Official'))
        // let video: MainVideoInteface = await (await axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=${config.API_KEY}&append_to_response=videos`)).data;
        return filteredArr;
    }

    async getSimilarMovie(id:number){
        let movies:MoviesResponse = await (await axios.get(`https://api.themoviedb.org/3/movie/${id}/similar?api_key=${config.API_KEY}&language=en-US&page=1`)).data;
        return movies.results;
    }
    async getSimilarTvShow(id:number){
        let tv:MainTvInterface = await (await axios.get(`https://api.themoviedb.org/3/tv/${id}/similar?api_key=${config.API_KEY}&language=en-US&page=1`)).data;
        return tv.results;
    }



    
    async logIn(userLogged: any) {
        let userLoggedString = JSON.stringify(userLogged)
        const response = await fetch('http://localhost:3020/api/user/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            mode: 'cors',
            body: userLoggedString
        })

        return response
        
    }


    async register(userLogged: any) {
        let userLoggedString = JSON.stringify(userLogged)
        const response = await fetch('http://localhost:3020/api/user/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            mode: 'cors',
            body: userLoggedString
        })
        return response
    }
    
}

export const apiService = new ApiService;