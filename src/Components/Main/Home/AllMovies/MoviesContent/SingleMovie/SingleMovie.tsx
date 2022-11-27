import { NavLink } from "react-router-dom";
import { config } from "../../../../../../config/config";
import { PopularMoviesInterface } from "../../../../../../model/PopularMoviesInterface";
import "./SingleMovie.css";

function SingleMovie({ movie }: { movie: PopularMoviesInterface }): JSX.Element {
    return (
        <div className="SingleMovie">
            <NavLink to={'/movies/singlemovie/' + movie.id}>
                <img src={config.images_url + movie.poster_path} alt="" />
            </NavLink>
            <h5 className="SingleMovieH5">{movie.title}</h5>
            <p>{movie.release_date}</p>
        </div>
    );
}

export default SingleMovie;
