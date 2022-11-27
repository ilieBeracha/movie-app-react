import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { config } from "../../../../../../config/config";
import { CastInterface } from "../../../../../../model/castInterface";
import { PopularMoviesInterface } from "../../../../../../model/PopularMoviesInterface";
import { apiService } from "../../../../../../Service/ApiService";
import Cast from "../../../../../cast/cast";
import "./MoviePage.css";

function MoviePage(): JSX.Element {
    const [movie, setMovie] = useState<PopularMoviesInterface>();
    const [cast,setCast] = useState<CastInterface[]>([])
    const movieParams = useParams();
    useEffect(() => {
        apiService.getMovieById(movieParams.movieId).then(res => setMovie(res));
        apiService.CastMovie(movieParams.movieId).then(res=> setCast(res))
        console.log(movie)
    }, [])
    return (
        <div className="MoviePage">
            <div className="MoviePageMainDiv">
                <img src={config.images_url + movie?.poster_path} alt="" />
                <div className="MoviePageNameOverview">
                    <h3>{movie?.title}</h3>
                    <h4>{`"${movie?.tagline}"`}</h4>
                    <p>{movie?.overview}</p>
                    <p>Genres: {movie?.genres.map((genre)=> <span>{genre.name}, </span>)}</p>
                </div>
            </div>
            <div className="MoviePageRateDiv">
                <p>Popularity: {movie?.popularity}</p>
                <p>Avg: {movie?.vote_average}</p>
            </div>
            <div className="castHeadings">
                <h5>Cast Members: </h5>
            </div>
            <div className="castDiv">
                {cast.map((member)=> <Cast cast={member}/>)}
            </div>
        </div>
    );
}

export default MoviePage;
