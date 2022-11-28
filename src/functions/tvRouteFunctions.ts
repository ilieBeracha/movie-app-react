import { PopularTvShowInterface } from "../model/PopularTvShowInterface";
import { apiService } from "../Service/ApiService";

class TvRouteFunctions{
    async getTvShowsByGenre(genId: number, setTvShows: any) {
        let filteredPopular: PopularTvShowInterface[] = []
        filteredPopular = await apiService.getAllPopularTvShows();
        filteredPopular = filteredPopular.filter(res => res.genre_ids.includes(genId));
        setTvShows(filteredPopular)
        console.log(filteredPopular);
    }

    async  filterByVoteAverage(setTvShows:any) {
        let filteredArr: PopularTvShowInterface[] = [];
        filteredArr = await apiService.getAllPopularTvShows()
        // filteredArr = filteredArr.filter(tv=> !tv.name)
        filteredArr = filteredArr.sort((a, b) => b.vote_average - a.vote_average);
        setTvShows(filteredArr)
    }

    async searchTvShows(query: string,setTvShows:any) {
        let filteredArr: PopularTvShowInterface[] = [];
        filteredArr = await apiService.getAllPopularTvShows();
        filteredArr = filteredArr.filter(tv => (tv.name).toLocaleLowerCase().includes(query.toLocaleLowerCase()));
        console.log(filteredArr)
        setTvShows(filteredArr)
    }
}

export const tvRouteFunction = new TvRouteFunctions;