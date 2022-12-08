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

function MoviePage(): JSX.Element {
    const [movie, setMovie] = useState<PopularMoviesInterface>();
    const [cast, setCast] = useState<CastInterface[]>([]);
    const [video, setVideo] = useState<VideoInterface>();
    const [similarMovies, setSimilarMovies] = useState<PopularMoviesInterface[]>([]);
    const [reviews, setReviews] = useState<ReviewsInterface[]>()
    const [starsPopularity, setStarsPopularity]= useState<string>()
    const movieParams = useParams();

    useEffect(() => {
        scrollTo.scrollTo()
        
    }, [])

    useEffect(() => {
        apiService.getMovieReviews(Number(movieParams.movieId)).then(res => setReviews(res));
        apiService.getSimilarMovie(Number(movieParams.movieId)).then(res => setSimilarMovies(res));
        apiService.getMovieById(movieParams.movieId).then(res => setMovie(res));
        apiService.CastMovie(movieParams.movieId).then(res => setCast(res));
        apiService.getVideoMovie(movieParams.movieId).then(res => setVideo(res[0]));
        stars()
    }, [movieParams]);

    function stars(){
        let avg = Number(movie?.vote_average.toFixed(0));
        if(avg===1){
            setStarsPopularity('★')
        }
        if(avg===2){
            setStarsPopularity('★★')
        }
        if(avg===3){
            setStarsPopularity('★★★')
        }
        if(avg===4){
            setStarsPopularity('★★★★')
        }
        if(avg===5){
            setStarsPopularity('★★★★★')
        }
        if(avg===6){
            setStarsPopularity('★★★★★★')
        }
        if(avg===7){
            setStarsPopularity('★★★★★★★')
        }
        if(avg===8){
            setStarsPopularity('★★★★★★★★')
        }
        if(avg===8){
            setStarsPopularity('★★★★★★★★★')
        }
        if(avg===9){
            setStarsPopularity('★★★★★★★★★★')
        }
        if(avg===10){
            setStarsPopularity('★★★★★★★★★★★')
        }
    }

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
                    <p>{starsPopularity}</p>
                </div>

                <div className="TrailerDiv">
                    <YouTube
                        videoId={video?.key}
                    // style={{borderRadius:'20px'}}
                    />
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
                    {reviews?.map((rev) => <Review key={rev.id} review={rev} />)
                    }
                </div>
            </div>
        </div>
    );
}

export default MoviePage;
