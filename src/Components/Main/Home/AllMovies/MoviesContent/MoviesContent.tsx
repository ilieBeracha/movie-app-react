import { useEffect, useState } from "react";
import { PopularMoviesInterface } from "../../../../../model/PopularMoviesInterface";
import { PopularTvShowInterface } from "../../../../../model/PopularTvShowInterface";
import { UpcomingMoviesInterface } from "../../../../../model/upcomingMoviesInterface";
import { apiService } from "../../../../../Service/ApiService";
import "./MoviesContent.css";
import SingleMovie from "./SingleMovie/SingleMovie";
import SingleTv from "./SingleTv/SingleTv";
import UpcomingMovie from "./UpcomingMovie/UpcomingMovie";

function MoviesContent(): JSX.Element {
    const [movies, setMovies] = useState<any[]>();
    const [movieOrTv, setMovieOrTv] = useState<boolean>(true);
    const [upcomings, setUpcomings] = useState<UpcomingMoviesInterface[]>([])

    useEffect(() => {
        apiService.getPopularMovies().then(res => setMovies(res))
        apiService.upcomingMovies().then(res=> setUpcomings(res))
    }, [])

    function TvClicked() {
        setMovieOrTv(!movieOrTv)
        apiService.getPopularTvShows().then(res => setMovies(res))
    }
    function MoviesClicked() {
        setMovieOrTv(!movieOrTv)
        apiService.getPopularMovies().then(res => setMovies(res))
    }
    return (
        <div className="MoviesContent">
            <div className="MovieContentWhatsPopular">
                <h3>Whats Popular: </h3>
                <div className="MovieContentWhatsPopularBtns">
                    <button disabled={movieOrTv} onClick={() => MoviesClicked()}>Movies</button>
                    <button disabled={!movieOrTv} onClick={() => TvClicked()}>On Tv</button>
                    {/* <button>For Rent</button>
                    <button>In Theaters</button> */}
                </div>
            </div>
            <div className="MoviesContentDiv">
                {movieOrTv ?
                    movies?.map((movie) => <SingleMovie key={movie.id} movie={movie} />)
                    : movies?.map((tv) => <SingleTv key={tv.id} tv={tv} />)}
            </div>
            <div className="MoviesContentUpcoming">
                <h3>Upcomings: </h3>
                <div className="MovieContentUpcomingBtns">
                    <button>Movies</button>
                    <button>On Tv</button>
                    {/* <button>For Rent</button>
                    <button>In Theaters</button> */}
                </div>
            </div>
            <div className="MoviesContentUpcomingDiv">
                    {upcomings.map((res)=> <UpcomingMovie key={res.id} movie={res}/> )}
            </div>
        </div>
    );
}

export default MoviesContent;
