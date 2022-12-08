import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import YouTube from "react-youtube";
import { config } from "../../../../../../config/config";
import { scrollTo } from "../../../../../../functions/scrollTo";
import { CastInterface } from "../../../../../../model/castInterface";
import { PopularMoviesInterface } from "../../../../../../model/PopularMoviesInterface";
import { ReviewsInterface } from "../../../../../../model/ReviewsInterface";
import { VideoInterface } from "../../../../../../model/videoInterface";
import { apiService } from "../../../../../../Service/ApiService";
import Cast from "../../../../cast/cast";
import Review from "../Review/Review";
import SingleMovie from "../SingleMovie/SingleMovie";
import "./MoviePage.css";
import { Rating } from 'react-simple-star-rating'

function MoviePage(): JSX.Element {
    const [movie, setMovie] = useState<PopularMoviesInterface>();
    const [cast, setCast] = useState<CastInterface[]>([]);
    const [video, setVideo] = useState<VideoInterface>();
    const [similarMovies, setSimilarMovies] = useState<PopularMoviesInterface[]>([]);
    const [reviews, setReviews] = useState<ReviewsInterface[]>()
    const [starsPopularity, setStarsPopularity] = useState<number | undefined>(Number(movie?.vote_average.toFixed(0)))
    const movieParams = useParams();

    useEffect(() => {
        scrollTo.scrollTo()

        console.log(starsPopularity)
    }, [])

    useEffect(() => {
        apiService.getMovieReviews(Number(movieParams.movieId)).then(res => setReviews(res));
        apiService.getSimilarMovie(Number(movieParams.movieId)).then(res => setSimilarMovies(res));
        apiService.getMovieById(movieParams.movieId).then(res => setMovie(res));
        apiService.CastMovie(movieParams.movieId).then(res => setCast(res));
        apiService.getVideoMovie(movieParams.movieId).then(res => setVideo(res[0]));
        if (movie) {
            setStarsPopularity(Number(movie.vote_average.toFixed(0)));
        }   // console.log(starsPopularity)
    }, [movie]);


    return (
        <div className="MoviePage">
            <div className="MoviePageMainDiv">
                <img src={config.images_url + movie?.poster_path} alt="" />
                <div className="MoviePageNameOverview">
                    <h3>"{movie?.title}"</h3>
                    <h4>{`"${movie?.tagline}"`}</h4>
                    <p>{movie?.overview}</p>
                    <p>Genres: {movie?.genres.map((genre) => <span key={genre.id}>{genre.name}, </span>)}</p>
                </div>
                <div className="MoviePageRateDiv">
                    <p>Popularity: {movie?.popularity}</p>
                    <Rating
                        allowFraction={true}
                        initialValue={starsPopularity}
                        allowHover={false}
                        iconsCount={10}
                        size={18}
                        readonly={true}
                    />
                </div>

                <div className="TrailerDiv">
                    {video && video.key ? (
                        <YouTube videoId={video.key} />
                    ) : (
                        <div className="noVideoDiv"><p>No video available</p></div>
                    )}
                </div>
            </div>
            <div className="MoviePageSecondaryDiv">
                <div className="castHeadings">
                    <h5>Cast Members: </h5>
                </div>
                <div className="castDiv">
                    {cast.map((member) => <Cast key={member.id} cast={member} />)}
                </div>
                <div className="SimilarMoviesHeadings">
                    <h5>Similar Movies: </h5>
                </div>
                <div className="similarMoviesDiv">
                    {similarMovies.map((movie) => <SingleMovie key={movie.id} movie={movie} />)
                    }
                </div>
                <div className="reviewsDiv">
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

export default MoviePage;
