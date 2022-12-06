import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchMovies } from "../../../app/MoviesSlice";
import { fetchTv } from "../../../app/TvShowsSlice";
import { scrollTo } from "../../../functions/scrollTo";
import { tvRouteFunction } from "../../../functions/tvRouteFunctions";
import { GenreInterface } from "../../../model/genreInterface";
import { PopularTvShowInterface } from "../../../model/PopularTvShowInterface";
import { apiService } from "../../../Service/ApiService";
import { SkeletonDemoInfo } from "../../../Service/SkeletonLoaderInfo";
import Genre from "../Genre/Genre";
import SingleTv from "../Home/AllMovies/MoviesContent/SingleTv/SingleTv";
import SkeletonLoader from "../SkeletonLoader/SkeletonLoader";
import "./TvRoute.css";
// import { GenreInterface } from "../../../../model/genreInterface";
// import { apiService } from "../../../../Service/ApiService";
// import Genre from "./Genre/Genre";

function TvRoute(): JSX.Element {
    const [tvShows, setTvShows] = useState<PopularTvShowInterface[]>()
    const [genre, setGenre] = useState<GenreInterface[]>()
    const [skeleton, setSkeleton] = useState<number[]>([]);
    const tvSelector = useSelector((state: any) => state.tv);
    const dispatch = useDispatch();

    useEffect(() => {
        if (tvSelector < 1) {
            apiService.getAllPopularTvShows().then(res => dispatch(fetchTv(res)));
        }
        apiService.getAllPopularTvShows().then(res=> setTvShows(res));
        scrollTo.scrollTo()
        apiService.getTvGenres().then(res => setGenre(res))
        setSkeleton(SkeletonDemoInfo);
    }, []);
    

    return (
        <div className="TvRoute">
            <div className="GenreDiv">
                {genre?.map((gen) => <Genre onclick={() => tvRouteFunction.getTvShowsByGenre(gen.id, setTvShows)} key={gen.name} id={gen.id} name={gen.name} />)}
                <div className="FilterDiv">
                    <h4>Filters: </h4>
                    <input onChange={(e) => tvRouteFunction.searchTvShows(e.target.value, setTvShows)} type="text" placeholder="Search Movie" />
                    {/* <button onClick={() => tvRouteFunction.filterByVoteAverage(setTvShows)}>Vote Average</button> */}
                </div>
                <div className="ScrollToBtn">
                    <button onClick={() => scrollTo.scrollTo()}>Top</button>
                </div>
            </div>
            <div className="displayTvShowsBy">
                {!tvShows ?
                    skeleton.map(() => <SkeletonLoader />)

                    : tvShows?.map((tv: any) => <SingleTv key={tv.id} tv={tv} />)}
            </div>
        </div>
    );
}

export default TvRoute;
