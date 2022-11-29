import { useSelector, useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import { add, remove } from "../../../../../../app/FavoriteSlice";
import { config } from "../../../../../../config/config";
import { PopularTvShowInterface } from "../../../../../../model/PopularTvShowInterface";
import "./SingleTv.css";

function SingleTv({ tv }: { tv: PopularTvShowInterface }): JSX.Element {
    const dispatch = useDispatch()

    function dispatchFav(input:HTMLInputElement){
        if(input.checked){
            dispatch(add(tv))
        } else{
            dispatch(remove(tv))
        }
        
    }
    return (
        <div className="SingleTv">
            <input onChange={(e)=> dispatchFav(e.target)} type="checkbox" />
            <NavLink to={'/tv/singletv/' + tv.id}>
                <img src={config.images_url + tv.poster_path} alt="" />
            </NavLink>
            <h6 className="SingleMovieH6">{tv.name}</h6>
            <p>{tv.first_air_date}</p>
        </div>
    );
}

export default SingleTv;
