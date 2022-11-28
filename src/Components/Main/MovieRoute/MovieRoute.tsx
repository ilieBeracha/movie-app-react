import { useEffect, useState } from "react";
import { movieRouteFunction } from "../../../functions/movieRouteFunction";
import { GenreInterface } from "../../../model/genreInterface";
import { PopularMoviesInterface } from "../../../model/PopularMoviesInterface";
import { apiService } from "../../../Service/ApiService";
import Genre from "../Genre/Genre";
import SingleMovie from "../Home/AllMovies/MoviesContent/SingleMovie/SingleMovie";
import "./MovieRoute.css";
// import { GenreInterface } from "../../../../model/genreInterface";
// import { apiService } from "../../../../Service/ApiService";
// import Genre from "./Genre/Genre";

function MovieRoute(): JSX.Element {
    const [genre, setGenre] = useState<GenreInterface[]>();
    const [movies, setMovies] = useState<PopularMoviesInterface[]>();

    useEffect(() => {
        apiService.getMovieGenres().then(res => setGenre(res));
        apiService.getAllPopularMovies().then(res => setMovies(res))
    }, [])

    return (
        <div className="MovieRoute">

            <div className="GenreDiv">
                {genre?.map((gen) => <Genre onclick={() => movieRouteFunction.getMoviesByGenre(gen.id, setMovies)} key={gen.id} id={gen.id} name={gen.name} />)}
                <div className="FilterDiv">
                    <h4>Filters: </h4>
                    <input onChange={(e) => movieRouteFunction.searchMovie(e.target.value, setMovies)} type="text" placeholder="Search Movie" />
                    <button onClick={() => movieRouteFunction.filterByVoteAverage(setMovies)}>Vote Average</button>
                </div>

            </div>
            <div className="displayMoviesBy">
                {!movies ? 'Loading...'
                    : movies?.map((movie) => <SingleMovie key={movie.id} movie={movie} />)}
            </div>
        </div>
    );
}

export default MovieRoute;
