import { useState } from "react";
import { NavLink } from "react-router-dom";
import { config } from "../../../../config/config";
import { PopularMoviesInterface } from "../../../../model/PopularMoviesInterface";
import { PopularTvShowInterface } from "../../../../model/PopularTvShowInterface";
import "./FavoriteSingle.css";

function FavoriteSingle({ movie, tv }: { movie: PopularMoviesInterface, tv: PopularTvShowInterface }): JSX.Element {
    const [isOpen, setIsOpen] = useState<boolean>(false)
    return (
        <div onClick={()=> setIsOpen(!isOpen)} className="FavoriteSingle">
            <div className="FavoriteSingleContainer">
                <div className="FavoriteSingleImg">
                    <img src={config.images_url + movie.poster_path || config.images_url + tv.poster_path} alt={movie.title || tv.name} />
                </div>
                <div className="FavoriteSingleTitle">
                    <h6>{movie.original_title || tv.name}</h6>
                </div>
                <p>Avg Vote: {movie.vote_average || tv.vote_average}</p>

            </div>
            {isOpen?
                <div className="FavoriteSingleOverview">
                    <p>{movie.overview || tv.overview}</p>
                </div>
                
            :<></>}
        </div>
    );
}

export default FavoriteSingle;
