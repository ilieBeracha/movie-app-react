import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import YouTube from "react-youtube";
import { config } from "../../../../../../config/config";
import { CastInterface } from "../../../../../../model/castInterface";
import { PopularMoviesInterface } from "../../../../../../model/PopularMoviesInterface";
import { ReviewsInterface } from "../../../../../../model/ReviewsInterface";
import { VideoInterface } from "../../../../../../model/videoInterface";
import { apiService } from "../../../../../../Service/ApiService";
import Cast from "../../../../cast/cast";
import Review from "../Review/Review";
import "./MoviePage.css";

function MoviePage(): JSX.Element {
    const [movie, setMovie] = useState<PopularMoviesInterface>();
    const [cast,setCast] = useState<CastInterface[]>([]);
    const [video,setVideo] = useState<VideoInterface>();
    // const [reviews,setReviews] = useState<ReviewsInterface[]>()
    const movieParams = useParams();
    useEffect(() => {
        apiService.getMovieById(movieParams.movieId).then(res => setMovie(res));
        apiService.CastMovie(movieParams.movieId).then(res=> setCast(res));
        apiService.getVideoMovie(movieParams.movieId).then(res=> setVideo(res[0]))
        console.log(video)
        // apiService.getMovieReviews(movieParams.movieId).then(res=> setReviews(res))
        // console.log(reviews)
    }, [])
    return (
        <div className="MoviePage">
            <div className="MoviePageMainDiv">
                <img src={config.images_url + movie?.poster_path} alt="" />
                <div className="MoviePageNameOverview">
                    <h3>"{movie?.title}"</h3>
                    <h4>{`"${movie?.tagline}"`}</h4>
                    <p>{movie?.overview}</p>
                    <p>Genres: {movie?.genres.map((genre)=> <span key={genre.id}>{genre.name}, </span>)}</p>
                </div>
            </div>
            <div className="MoviePageRateDiv">
                <p>Popularity: {movie?.popularity}</p>
                <p>Avg: {movie?.vote_average}</p>
            </div>
            <div className="TrailerDiv">
                <YouTube
                videoId={video?.key}
                // style={{borderRadius:'20px'}}
                />
            </div>
            <div className="castHeadings">
                <h5>Cast Members: </h5>
            </div>
            <div className="castDiv">
                {cast.map((member)=> <Cast key={member.id} cast={member}/>)}
            </div>
            {/* <div className="MoviePageReviews">
                {reviews?.map((review)=> <Review review={review}/>)}
            </div> */}
        </div>
    );
}

export default MoviePage;
