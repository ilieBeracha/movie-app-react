import { useSelector, useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import { add, remove } from "../../../../../../app/FavoriteSlice";
import { config } from "../../../../../../config/config";
import { PopularMoviesInterface } from "../../../../../../model/PopularMoviesInterface";
import { UpcomingMoviesInterface } from "../../../../../../model/upcomingMoviesInterface";
import "./TrendingMovie.css";

function TrendingMovie({ movie }: { movie: PopularMoviesInterface }): JSX.Element {
    const favoriteSelector = useSelector((state:any)=> state.favorite.values);
    const dispatch = useDispatch()

    function dispatchFav(input:HTMLInputElement){
        if(input.checked){
            dispatch(add(movie))
        } else{
            dispatch(remove(movie))
        }
    }
    return (
        <div className="TrendingMovie">
            <input onChange={(e)=> dispatchFav(e.target)} type="checkbox" />

            <NavLink to={'/movies/singlemovie/' + movie.id}>
                <img src={config.images_url + movie.poster_path} alt="" />
            </NavLink>
            <h6 className="SingleMovieH6">{movie.title}</h6>
            <p>{movie.release_date}</p>
        </div>
    );
}

export default TrendingMovie;
