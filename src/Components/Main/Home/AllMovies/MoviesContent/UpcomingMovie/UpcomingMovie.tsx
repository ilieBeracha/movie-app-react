import { NavLink } from "react-router-dom";
import { config } from "../../../../../../config/config";
import { UpcomingMoviesInterface } from "../../../../../../model/upcomingMoviesInterface";
import "./UpcomingMovie.css";

function UpcomingMovie({ movie }: { movie: UpcomingMoviesInterface }): JSX.Element {
    return (
        <div className="UpcomingMovie">
            <NavLink to={'/movies/singlemovie/' + movie.id}>
                <img src={config.images_url + movie.poster_path} alt="" />
            </NavLink>
            <h5 className="SingleMovieH5">{movie.title}</h5>
            <p>Releasing On: { movie.release_date}</p>
        </div>
    );
}

export default UpcomingMovie;
