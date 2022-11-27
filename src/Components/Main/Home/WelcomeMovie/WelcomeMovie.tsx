import { useEffect, useState } from "react";
import { config } from "../../../../config/config";
import { PopularMoviesInterface } from "../../../../model/PopularMoviesInterface";
import { apiService } from "../../../../Service/ApiService";
import "./WelcomeMovie.css";

function WelcomeMovie(): JSX.Element {

    return (
        <div className="WelcomeMovie">
            <div className="WelcomeMovieDesp">
                <h1>Welcome.</h1>
                <h2>Millions of <span className="WelcomeMovieSpan">movies</span>, <span className="WelcomeMovieSpan">TV shows</span> and <span className="WelcomeMovieSpan">people</span> to discover.</h2>
                <div className="WelcomeMovieExploreNow">
                    <h2>Explore now.</h2>
                </div>
                <div className="WelcomeMovieAnchor">
                    <a href="#MovieContentWhatsPopular">Dicover</a>
                </div>
            </div>
            <div className="WelcomeMovieImage">
                <img src="" alt="" />
            </div>
        </div>
    );
}

export default WelcomeMovie;
