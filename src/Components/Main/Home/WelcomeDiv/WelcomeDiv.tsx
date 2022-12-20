// import { useEffect, useRef, useState } from "react";
// import { config } from "../../../../config/config";
// import { PopularMoviesInterface } from "../../../../model/PopularMoviesInterface";
// import { apiService } from "../../../../Service/ApiService";
import "./WelcomeDiv.css";
import { toast } from 'react-toastify';
import { NavLink } from "react-router-dom";
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';

function WelcomeDiv(): JSX.Element {

    function toastMess() {
        toast.info('Coming soon...', {
            position: toast.POSITION.TOP_CENTER,
            className: 'discoverToast',
            theme: "colored",
            // hideProgressBar:true,
            closeOnClick: true,
            draggable: true,
            pauseOnHover: false,
        })
    }

    return (
        <div className="WelcomeDiv">
            <div className="WelcomeDivDesp">
                <h1>Welcome</h1>
                <h2>Millions of <NavLink to={'/movies'} className="WelcomeDivSpan">Movies</NavLink>, <NavLink to={'/tv'} className="WelcomeDivSpan">TV shows</NavLink> and <span onClick={toastMess} className="WelcomeDivSpan">People</span> to discover.</h2>
                <div className="WelcomeDivExploreNow">
                    <h2>Explore now</h2>
                </div>
                <div className="WelcomeDivAnchor">
                    {/* <button onClick={() => {
                        window.scrollTo({
                            top: 700,
                            behavior: 'smooth'
                        });
                    }}>Dicover</button> */}
                    <ArrowDownwardIcon fontSize="large"/>
                </div>
            </div>
            <div className="WelcomeDivImage">
                <img src="" alt="" />
            </div>
        </div>
    );
}

export default WelcomeDiv;
