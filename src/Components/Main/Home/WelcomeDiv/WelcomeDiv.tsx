import { useEffect, useState } from "react";
import { config } from "../../../../config/config";
import { PopularMoviesInterface } from "../../../../model/PopularMoviesInterface";
import { apiService } from "../../../../Service/ApiService";
import "./WelcomeDiv.css";
import { ToastContainer, toast } from 'react-toastify';
import { Toast } from "react-toastify/dist/components";
import { NavLink } from "react-router-dom";


function WelcomeDiv(): JSX.Element {

    // function searchMoviesOrTvShows(query:string){
        
    // }

    function toastMess(){
        toast.info('Coming soon...',{
            position: toast.POSITION.TOP_CENTER,
            className: 'discoverToast',
            theme: "colored",
            // hideProgressBar:true,
            closeOnClick:true,
            draggable:true,
            pauseOnHover:false,
        })
    }

    return (
        <div className="WelcomeDiv">
            <div className="WelcomeDivDesp">
                <h1>Welcome</h1>
                <h2>Millions of <NavLink to={'/movies'} className="WelcomeDivSpan">movies</NavLink>, <NavLink to={'/tv'} className="WelcomeDivSpan">TV shows</NavLink> and <span onClick={toastMess} className="WelcomeDivSpan">people</span> to discover.</h2>
                <div className="WelcomeDivExploreNow">
                    <h2>Explore now</h2>
                </div>
                <div className="WelcomeDivAnchor">
                    {/* <input onChange={(e)=>searchMoviesOrTvShows(e.target.value)} type="text" placeholder="Search" /> */}
                    <button onClick={()=>{
                         window.scrollTo({
                            top: 950,
                            behavior: 'smooth'
                        });
                    }}>Dicover</button>
                </div>
            </div>
            <div className="WelcomeDivImage">
                <img src="" alt="" />
            </div>
        </div>
    );
}

export default WelcomeDiv;
