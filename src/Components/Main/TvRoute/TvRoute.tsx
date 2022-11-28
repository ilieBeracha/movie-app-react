import { useEffect, useState } from "react";
import { scrollTo } from "../../../functions/scrollTo";
import { tvRouteFunction } from "../../../functions/tvRouteFunctions";
import { GenreInterface } from "../../../model/genreInterface";
import { PopularTvShowInterface } from "../../../model/PopularTvShowInterface";
import { apiService } from "../../../Service/ApiService";
import Genre from "../Genre/Genre";
import SingleTv from "../Home/AllMovies/MoviesContent/SingleTv/SingleTv";
import "./TvRoute.css";
// import { GenreInterface } from "../../../../model/genreInterface";
// import { apiService } from "../../../../Service/ApiService";
// import Genre from "./Genre/Genre";

function TvRoute(): JSX.Element {
    const [tvShows, setTvShows] = useState<PopularTvShowInterface[]>()
    const [genre, setGenre] = useState<GenreInterface[]>()

    useEffect(() => {
        apiService.getTvGenres().then(res => setGenre(res))
        apiService.getAllPopularTvShows().then(res => setTvShows(res))
    }, [])

    // async function getTvShowsByGenre(genId: any) {
    //     let filteredArr: PopularTvShowInterface[] = await apiService.getAllPopularTvShows();
    //     filteredArr = filteredArr.filter((res) => res.genre_ids.includes(genId));
    //     setTvShows(filteredArr)
    // }
    return (
        <div className="TvRoute">
            <div className="GenreDiv">
                {genre?.map((gen) => <Genre onclick={() => tvRouteFunction.getTvShowsByGenre(gen.id, setTvShows)} key={gen.name} id={gen.id} name={gen.name} />)}
                <div className="FilterDiv">
                    <h4>Filters: </h4>
                    <input onChange={(e) => tvRouteFunction.searchTvShows(e.target.value, setTvShows)} type="text" placeholder="Search Movie" />
                    <button onClick={() => tvRouteFunction.filterByVoteAverage(setTvShows)}>Vote Average</button>
                </div>
                <div className="ScrollToBtn">
                    <button onClick={() => scrollTo.scrollTo()}>Top</button>
                </div>
            </div>
            <div className="displayTvShowsBy">
                {!tvShows ? <div className="loader">Loading...</div>
                    : tvShows?.map((tv) => <SingleTv key={tv.id} tv={tv} />)}
            </div>
        </div>
    );
}

export default TvRoute;
