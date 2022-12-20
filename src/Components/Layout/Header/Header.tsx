import { Avatar, Box, Button, Modal, Typography } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { scrollTo } from "../../../functions/scrollTo";
import HomeIcon from '@mui/icons-material/Home';
import MovieIcon from '@mui/icons-material/Movie';
import TvIcon from '@mui/icons-material/Tv';
import FavoriteIcon from '@mui/icons-material/Favorite';
import "./Header.css";
import { useEffect, useState } from "react";
import { darkMode, lightMode } from "../../../app/lightDarkSlice";
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';
// import img from '/images/logo.png'


function Header(): JSX.Element {
    const favoriteSelector = useSelector((state: any) => state.favorite.values);
    const mode = useSelector((state: any) => state.mode.toggle);
    const dispatch = useDispatch()
    // console.log(usersSelector);
    const [isLight, setIsLight] = useState<boolean>(true)

    const [open, setOpen] = useState(false);

    function clickedWebMode() {
        if (isLight) {
            dispatch(darkMode())
            setIsLight(!isLight)
        } else {
            dispatch(lightMode());
            setIsLight(!isLight)
        }
    }


    return (
        <div className="Header">


            <NavLink to={'/'}>
                <div onClick={() => scrollTo.scrollTo()} className="Header_Headings">
                    
                    {/* <h1>Needs</h1> */}
                </div>
            </NavLink>

            <div className="Header_NavBar">
                <div className="Header_NavBar_div">
                    <NavLink to={'/'}>

                        <HomeIcon fontSize="medium" />
                        <span>Home</span>
                    </NavLink>
                </div>
                <div className="Header_NavBar_div">
                    <NavLink to={'/movies'}>
                        <MovieIcon fontSize="medium" />
                        <span>Movies</span>
                    </NavLink>
                </div>
                <div className="Header_NavBar_div">
                    <NavLink to={'/tv'}>
                        <TvIcon fontSize="medium" />
                        <span>Tv</span>
                    </NavLink>
                </div>
                {favoriteSelector.length !== 0 ?
                    <div className="Header_NavBar_div">
                        <NavLink to={'/fav'}>
                            <FavoriteIcon fontSize="medium" />
                            <span>Wishlist</span>
                        </NavLink>
                    </div>
                    : <></>}
            </div>

            <div className="Header_Log">
                <div className="mode-icon" onClick={clickedWebMode}>
                    {mode ?
                        <DarkModeIcon fontSize="large" />
                        : <LightModeIcon fontSize="large" />
                    }
                </div>
            </div>
        </div>
    );
}
export default Header;
