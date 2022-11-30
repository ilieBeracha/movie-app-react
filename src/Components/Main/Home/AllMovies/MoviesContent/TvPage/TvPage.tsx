import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import YouTube from "react-youtube";
import { config } from "../../../../../../config/config";
import { CastInterface } from "../../../../../../model/castInterface";
import { PopularTvShowInterface } from "../../../../../../model/PopularTvShowInterface";
import { VideoInterface } from "../../../../../../model/videoInterface";
import { apiService } from "../../../../../../Service/ApiService";
import Cast from "../../../../cast/cast";
import "./TvPage.css";

function TvPage(): JSX.Element {
    const tvParams = useParams()
    const [cast,setCast] = useState<CastInterface[]>([])
    const [tv, setTv] = useState<PopularTvShowInterface>();
    const [video,setVideo] = useState<VideoInterface>();

    console.log(tvParams)
    useEffect(() => {
        apiService.getTvById(tvParams.tvId).then(res => setTv(res))
        apiService.CastTv(tvParams.tvId).then(res=> setCast(res))
        apiService.getVideoTv(tvParams.tvId).then(res=> setVideo(res[0]))

    }, [])
    
    return (
        <div className="TvPage">
            <div className="tvPageMainDiv">
                <img src={config.images_url + tv?.poster_path} alt="" />
                <div className="TvPageNameOverview">
                    <h3>"{tv?.name}"</h3>
                    <h4>{`"${tv?.tagline}"`}</h4>
                    <p>{tv?.overview}</p>
                    <p>Seasons: {tv?.number_of_seasons}</p>
                    <p>Number of eposodes: {tv?.number_of_episodes}</p>
                </div>
            </div>
            <div className="TvPageRateDiv">
                <p>Popularity: {tv?.popularity}</p>
                <p>Avg: {tv?.vote_average}</p>
            </div>
            <div className="TrailerDiv">
                <YouTube
                videoId={video?.key}
                />
            </div>
            <div className="castHeadings">
                <h5>Cast Members: </h5>
            </div>
            <div className="castDiv">
                {cast.map((member)=> <Cast cast={member}/>)}
            </div>
        </div>
    );
}

export default TvPage;
