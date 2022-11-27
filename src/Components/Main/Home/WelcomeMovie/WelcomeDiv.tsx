import { useEffect, useState } from "react";
import { config } from "../../../../config/config";
import { PopularMoviesInterface } from "../../../../model/PopularMoviesInterface";
import { apiService } from "../../../../Service/ApiService";
import "./WelcomeDiv.css";

function WelcomeDiv(): JSX.Element {

    return (
        <div className="WelcomeDiv">
            <div className="WelcomeDivDesp">
                <h1>Welcome.</h1>
                <h2>Millions of <span className="WelcomeDivSpan">movies</span>, <span className="WelcomeDivSpan">TV shows</span> and <span className="WelcomeDivSpan">people</span> to discover.</h2>
                <div className="WelcomeDivExploreNow">
                    <h2>Explore now.</h2>
                </div>
                <div className="WelcomeDivAnchor">
                    <a href="#MovieContentWhatsPopular">Dicover</a>
                </div>
            </div>
            <div className="WelcomeDivImage">
                <img src="" alt="" />
            </div>
        </div>
    );
}

export default WelcomeDiv;
