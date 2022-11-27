import { useEffect, useState } from "react";
import { PopularMoviesInterface } from "../../../../../model/PopularMoviesInterface";
import { PopularTvShowInterface } from "../../../../../model/PopularTvShowInterface";
import { apiService } from "../../../../../Service/ApiService";
import "./MoviesContent.css";
import SingleMovie from "./SingleMovie/SingleMovie";
import SingleTv from "./SingleTv/SingleTv";

function MoviesContent(): JSX.Element {
    const [movies, setMovies] = useState<any[]>();
    const [movieOrTv, setMovieOrTv] = useState<boolean>(true)

    useEffect(() => {
        apiService.getPopularMovies().then(res => setMovies(res))
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
            <div className="MoviesContentMovies">
                {movieOrTv ?
                    movies?.map((movie) => <SingleMovie key={movie.id} movie={movie} />)
                    : movies?.map((tv) => <SingleTv tv={tv} />)}
            </div>
        </div>
    );
}

export default MoviesContent;
