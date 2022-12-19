import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Rating } from "react-simple-star-rating";
import YouTube from "react-youtube";
import { start } from "repl";
import { config } from "../../../../../../config/config";
import { scrollTo } from "../../../../../../functions/scrollTo";
import { CastInterface } from "../../../../../../model/castInterface";
import { PopularTvShowInterface } from "../../../../../../model/PopularTvShowInterface";
import { ReviewsInterface } from "../../../../../../model/ReviewsInterface";
import { VideoInterface } from "../../../../../../model/videoInterface";
import { apiService } from "../../../../../../Service/ApiService";
import Cast from "../../../../cast/cast";
import Review from "../Review/Review";
import SingleTv from "../SingleTv/SingleTv";
import "./TvPage.css";

function TvPage(): JSX.Element {
    const tvParams = useParams();
    const [cast, setCast] = useState<CastInterface[]>([])
    const [tv, setTv] = useState<PopularTvShowInterface>();
    const [video, setVideo] = useState<VideoInterface>();
    const [SimilarTv, setSimilarTv] = useState<PopularTvShowInterface[]>([])
    const [reviews, setReviews] = useState<ReviewsInterface[]>()
    const [starsPopularity, setStarsPopularity] = useState<number | undefined>(Number(tv?.vote_average.toFixed(0)))



    useEffect(() => {
        scrollTo.scrollTo()
    }, [])

    useEffect(() => {
        apiService.getTvById(tvParams.tvId).then(res => setTv(res))
        apiService.CastTv(tvParams.tvId).then(res => setCast(res))
        apiService.getVideoTv(tvParams.tvId).then(res => setVideo(res[0]))
        apiService.getSimilarTvShow(Number(tvParams.tvId)).then(res => setSimilarTv(res));
        apiService.getTvReviews(Number(tvParams.tvId)).then(res => setReviews(res));
        if (tv) {
            setStarsPopularity(Number(tv.vote_average.toFixed(0)));
        }
    }, [tvParams])


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
                <div className="TvPageRateDiv">
                    <p>Popularity: {tv?.popularity}</p>
                    {tv && (
                        <Rating
                            allowFraction={true}
                            initialValue={Number(tv.vote_average.toFixed(0))}
                            allowHover={false}
                            iconsCount={10}
                            size={18}
                            readonly={true}
                        />
                    )}
                </div>
                <div className="TrailerDiv">
                    {video && video.key ? (
                        <YouTube videoId={video.key} />
                    ) : (
                        <div className="noVideoDiv"><p>No video available</p></div>
                    )}
                </div>
            </div>
            <div className="TvPageSecondaryDiv">

                <div className="castHeadings">
                    <h5>Cast Members: </h5>
                </div>
                <div className="castDiv">
                    {cast.map((member) => <Cast cast={member} />)}
                </div>
                <div className="SimilarTvHeadings">
                    <h5>Similar Tv Shows: </h5>
                </div>
                <div className="similarTvDiv">

                    {SimilarTv.map((tv) => <SingleTv tv={tv} />)

                    }
                </div>
                <div className="reviewsDiv">
                    
                <div className="SimilarTvHeadings">
                  
                </div>
                    {
                        reviews && reviews.length === 0 ? (
                            <div>No reviews available</div>
                        ) : (
                            reviews?.map((review) => (
                                <Review key={review.id} review={review} />
                            ))
                        )
                    }
                </div>
            </div>
        </div>
    );
}

export default TvPage;
