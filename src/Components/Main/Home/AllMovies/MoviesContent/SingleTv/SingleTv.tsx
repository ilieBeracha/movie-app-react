import { NavLink } from "react-router-dom";
import { config } from "../../../../../../config/config";
import { PopularTvShowInterface } from "../../../../../../model/PopularTvShowInterface";
import "./SingleTv.css";

function SingleTv({ tv }: {tv:PopularTvShowInterface}): JSX.Element {
    return (
        <div className="SingleTv">
            <NavLink to={'/tv/singletv/' + tv.id}>
                <img src={config.images_url + tv.poster_path} alt="" />
            </NavLink>
            <h5 className="SingleMovieH5">{tv.name}</h5>
            <p>{tv.first_air_date}</p>
        </div>
    );
}

export default SingleTv;
