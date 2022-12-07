import { Skeleton } from "@mui/material";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchMovies } from "../../../app/MoviesSlice";
import { movieRouteFunction } from "../../../functions/movieRouteFunction";
import { scrollTo } from "../../../functions/scrollTo";
import { GenreInterface } from "../../../model/genreInterface";
import { PopularMoviesInterface } from "../../../model/PopularMoviesInterface";
import { apiService } from "../../../Service/ApiService";
import { SkeletonDemoInfo } from "../../../Service/SkeletonLoaderInfo";
import Genre from "../Genre/Genre";
import SingleMovie from "../Home/AllMovies/MoviesContent/SingleMovie/SingleMovie";
import SkeletonLoader from "../SkeletonLoader/SkeletonLoader";
import "./MovieRoute.css";
// import { GenreInterface } from "../../../../model/genreInterface";
// import { apiService } from "../../../../Service/ApiService";
// import Genre from "./Genre/Genre";

function MovieRoute(): JSX.Element {
    const moviesSelector = useSelector((state: any) => state.movies);
    const [movies, setMovies] = useState<PopularMoviesInterface[]>(moviesSelector);
    const [genre, setGenre] = useState<GenreInterface[]>();
    const [skeleton, setSkeleton] = useState<number[]>([]);
    const dispatch = useDispatch()

    useEffect(() => {
        console.log(genre)
        scrollTo.scrollTo()
        if (moviesSelector.length < 1) {
            apiService.getAllPopularMovies().then(res => dispatch(fetchMovies(res)));
        }
            apiService.getMovieGenres().then(res => setGenre(res));
        
        setSkeleton(SkeletonDemoInfo);
    }, [])

    return (
        <div className="MovieRoute">
            <div className="GenreDiv">
                {genre?.map((gen: any) => <Genre onclick={() => movieRouteFunction.getMoviesByGenre(gen.id, setMovies)} key={gen.id} id={gen.id} name={gen.name} />)}
                <div className="FilterDiv">
                    <h4>Filters: </h4>
                    <input onChange={(e) => movieRouteFunction.searchMovie(e.target.value, setMovies)} type="text" placeholder="Search Movie" />
                    {/* <button onClick={() => movieRouteFunction.filterByVoteAverage(setMovies)}>Vote Average</button> */}
                </div>
                <div className="ScrollToBtn">
                    <button onClick={() => scrollTo.scrollTo()}>Top</button>
                </div>
            </div>
            <div className="displayMoviesBy">
                {
                    movies.length === 0 ?
                        // <div className="loader">Loading...</div>
                        skeleton.map(() => <SkeletonLoader />)
                        :
                        movies?.map((movie: any) => <SingleMovie key={movie.id} movie={movie} />)
                }
            </div>
        </div>
    );
}

export default MovieRoute;
