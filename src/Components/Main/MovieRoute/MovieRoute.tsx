import { useEffect, useState } from "react";
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

    async function getMoviewsGenre(genId: any) {
        let filteredPopular: PopularMoviesInterface[] = []
        filteredPopular = await apiService.getAllPopularMovies();
        filteredPopular = filteredPopular.filter(res => res.genre_ids.includes(genId));
        setMovies(filteredPopular)
        console.log(filteredPopular);
    }
    return (
        <div className="MovieRoute">
            <div className="GenreDiv">
                {genre?.map((gen) => <Genre onclick={() => getMoviewsGenre(gen.id)} key={gen.id} id={gen.id} name={gen.name} />)}
            </div>
            <div className="MoviesByGenre">
                {!movies ? 'Loading...'
                    : movies?.map((movie) => <SingleMovie key={movie.id} movie={movie} />)}
            </div>
        </div>
    );
}

export default MovieRoute;
