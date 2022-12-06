import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchMovies } from "../../../app/MoviesSlice";
import { fetchTv } from "../../../app/TvShowsSlice";
import { apiService } from "../../../Service/ApiService";
import Header from "../../Header/Header";
import AllMovies from "./AllMovies/AllMovies";
import "./Home.css";
import WelcomeDiv from "./WelcomeDiv/WelcomeDiv";

function Home(): JSX.Element {
    const dispatch = useDispatch();

    useEffect(()=>{
        // apiService.getAllPopularMovies().then(res=> dispatch(fetchMovies(res)));
        // apiService.getAllPopularTvShows().then(res=> dispatch(fetchTv(res)));
    },[])
    return (
        <div className="Home">
			<WelcomeDiv />
            <AllMovies />
        </div>
    );
}

export default Home;
