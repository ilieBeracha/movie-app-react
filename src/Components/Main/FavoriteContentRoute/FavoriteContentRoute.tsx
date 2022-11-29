import { useSelector } from "react-redux";
import "./FavoriteContentRoute.css";
import FavoriteSingle from "./FavoriteSingle/FavoriteSingle";

function FavoriteContentRoute(): JSX.Element {
    const favoriteSelector = useSelector((state: any) => state.favorite.values);
    // console.log(favoriteSelector)
    return (
        <div className="FavoriteContentRoute">
            {favoriteSelector.map((fav: any) => <FavoriteSingle tv={fav} movie={fav} />)}
        </div>
    );
}

export default FavoriteContentRoute;
