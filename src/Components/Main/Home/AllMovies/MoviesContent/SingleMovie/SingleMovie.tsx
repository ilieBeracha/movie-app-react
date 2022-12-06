import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { add, remove } from "../../../../../../app/FavoriteSlice";
import { config } from "../../../../../../config/config";
import { PopularMoviesInterface } from "../../../../../../model/PopularMoviesInterface";
import "./SingleMovie.css";

function SingleMovie({ movie }: { movie: PopularMoviesInterface }): JSX.Element {
    const favoriteSelector = useSelector((state: any) => state.favorite.values);
    const dispatch = useDispatch()

    function dispatchFav(input: HTMLInputElement) {
        if (input.checked) {
            dispatch(add(movie))
        } else {
            dispatch(remove(movie))
        }
    }

    return (
        <div className="SingleMovie">
            <label>
                <input checked={favoriteSelector.map((mov: any) => mov.id).includes(movie.id)} onChange={(e) => dispatchFav(e.target)} id="input" type="checkbox" />
                <span className="check"></span>
            </label>
            <NavLink to={'/movies/singlemovie/' + movie.id}>
                <img src={config.images_url + movie.poster_path} alt="" />
            </NavLink>
            <div className="singleMovieInfo">
                <h6 className="SingleMovieH6">{movie.title}</h6>
                <p>{movie.release_date}</p>
            </div>
        </div>
    );
}

export default SingleMovie;
