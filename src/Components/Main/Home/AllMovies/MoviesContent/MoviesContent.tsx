import { useEffect, useState } from "react";
import { apiService } from "../../../../../Service/ApiService";
import "./MoviesContent.css";
import SingleMovie from "./SingleMovie/SingleMovie";
import SingleTv from "./SingleTv/SingleTv";

function MoviesContent(): JSX.Element {
   
    const [movies, setMovies] = useState<any[]>();
    const [movieOrTv, setMovieOrTv] = useState<boolean>(true);
    const [trendingMovieOrTv, setTrendingMovieOrTv] = useState<boolean>(true);
    const [Trending, setTrending] = useState<any[]>([])

    useEffect(() => {
        apiService.getPopularMovies().then(res => setMovies(res))
        apiService.getTrendingMovie().then(res=> setTrending(res))
    }, [])

    function TvClicked() {
        setMovieOrTv(!movieOrTv)
        apiService.getPopularTvShows().then(res => setMovies(res))
    }
    function MoviesClicked() {
        setMovieOrTv(!movieOrTv)
        apiService.getPopularMovies().then(res => setMovies(res))
    }

    function getTrendingTvFunc(){
        setTrendingMovieOrTv(!trendingMovieOrTv);
        apiService.getTrendingTv().then(res=> setTrending(res))
    }
    function getTrendingMovieFunc(){
        setTrendingMovieOrTv(!trendingMovieOrTv);
        apiService.getTrendingMovie().then(res=> setTrending(res))
    }
    return (
        <div className="MoviesContent">
            <div className="MovieContentWhatsPopular">
                <h3>Whats Popular: </h3>
                <div className="MovieContentWhatsPopularBtns">
                    <button disabled={movieOrTv} onClick={() => MoviesClicked()}>Movies</button>
                    <button disabled={!movieOrTv} onClick={() => TvClicked()}>On Tv</button>
                </div>
            </div>
            <div className="MoviesContentDiv">
                {movieOrTv ?
                    movies?.map((movie) => <SingleMovie key={movie.id} movie={movie} />)
                    : movies?.map((tv) => <SingleTv key={tv.id} tv={tv} />)}
            </div>
            <div className="MoviesContentUpcoming">
                <h3>Trending: </h3>
                <div className="MovieContentUpcomingBtns">
                    <button onClick={getTrendingMovieFunc} disabled={trendingMovieOrTv}>Movies</button>
                    <button onClick={getTrendingTvFunc} disabled={!trendingMovieOrTv}>On Tv</button>
                </div>
            </div>
            <div className="MoviesContentTrendingDiv">
                    {trendingMovieOrTv?
                    Trending.map((res)=> <SingleMovie key={res.id} movie={res}/> )
                :Trending.map((tv)=> <SingleTv tv={tv}/>)}
            </div>
        </div>
    );
}

export default MoviesContent;
