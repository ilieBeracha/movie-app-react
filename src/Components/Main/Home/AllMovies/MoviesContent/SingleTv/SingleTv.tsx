import { useSelector, useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import { add, remove } from "../../../../../../app/FavoriteSlice";
import { config } from "../../../../../../config/config";
import { PopularTvShowInterface } from "../../../../../../model/PopularTvShowInterface";
import "./SingleTv.css";

function SingleTv({ tv }: { tv: PopularTvShowInterface }): JSX.Element {
    const dispatch = useDispatch()
    const favoriteSelector = useSelector((state: any) => state.favorite.values);

    function dispatchFav(input: HTMLInputElement) {
        if (input.checked) {
            dispatch(add(tv))
        } else {
            dispatch(remove(tv))
        }

    }
    return (
        <div className="SingleTv">
            <label>
                <input checked={favoriteSelector.map((mov: any) => mov.id).includes(tv.id)} onChange={(e) => dispatchFav(e.target)} id="input" type="checkbox" />
                <span className="check"></span>
            </label>
            <NavLink to={'/tv/singletv/' + tv.id}>
                <img src={config.images_url + tv.poster_path} alt="" />
            </NavLink>
            <div className="singleTvInfo">
                <h6 className="SingleMovieH6">{tv.name}</h6>
                <p>{tv.first_air_date}</p>
            </div>
        </div>
    );
}

export default SingleTv;
