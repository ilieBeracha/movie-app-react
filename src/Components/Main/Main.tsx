import { Route, Routes } from "react-router-dom";
import MoviePage from "./Home/AllMovies/MoviesContent/MoviePage/MoviePage";
import TvPage from "./Home/AllMovies/MoviesContent/TvPage/TvPage";
import Home from "./Home/Home";
import "./Main.css";
import MovieRoute from "./MovieRoute/MovieRoute";
import TvRoute from "./TvRoute/TvRoute";

function Main(): JSX.Element {
    return (
        <div className="Main">
			<Routes>
                <Route path="/" element={<Home />}></Route>
                <Route path="/movies" element={<MovieRoute />}></Route>
                <Route path="/movies/singlemovie/:movieId" element={<MoviePage />}></Route>
                <Route path="/tv/singletv/:tvId" element={<TvPage />}></Route>
                <Route path="/tv" element={<TvRoute />}></Route>
            </Routes>
        </div>
    );
}

export default Main;
