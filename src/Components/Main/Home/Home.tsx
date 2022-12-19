import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchMovies } from "../../../app/MoviesSlice";
import { fetchTv } from "../../../app/TvShowsSlice";
import { apiService } from "../../../Service/ApiService";
import Header from "../../Layout/Header/Header";
import AllMovies from "./AllMovies/AllMovies";
import "./Home.css";
import WelcomeDiv from "./WelcomeDiv/WelcomeDiv";

function Home(): JSX.Element {
    const moviesSelector = useSelector((state: any) => state.movies);
    const tvSelector = useSelector((state: any) => state.tv);
    const dispatch = useDispatch();

    useEffect(() => {
        if (moviesSelector.length > 0) {
            // apiService.getAllPopularMovies().then(res => dispatch(fetchMovies(res)));
            return
        } else {
            apiService.getAllPopularMovies().then(res => dispatch(fetchMovies(res)));
        }
        if (tvSelector.length > 0) {
            // apiService.getAllPopularTvShows().then(res => dispatch(fetchTv(res)));
            return
        } else {
            apiService.getAllPopularTvShows().then(res => dispatch(fetchTv(res)));
        }
    }, [])
    return (
        <div className="Home">
            <WelcomeDiv />
            <AllMovies />
        </div>
    );
}

export default Home;
