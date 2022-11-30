import { Avatar } from "@mui/material";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { scrollTo } from "../../functions/scrollTo";
import HomeIcon from '@mui/icons-material/Home';
import MovieIcon from '@mui/icons-material/Movie';
import TvIcon from '@mui/icons-material/Tv';
import FavoriteIcon from '@mui/icons-material/Favorite';
import AcUnitSharpIcon from '@mui/icons-material/AcUnitSharp';
import "./Header.css";
import { toast } from "react-toastify";

function Header(): JSX.Element {
    const favoriteSelector = useSelector((state: any) => state.favorite.values);

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
        <div className="Header">
            <NavLink to={'/'}>
                <div onClick={() => scrollTo.scrollTo()} className="Header_Headings">
                    {/* <AcUnitSharpIcon fontSize="large"/> */}
                    <h1>Need's</h1>
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
                        <span>Tv Shows</span>
                    </NavLink>
                </div>
                {favoriteSelector.length !== 0 ?
                    <div className="Header_NavBar_div">
                        <NavLink to={'/fav'}>
                            <FavoriteIcon fontSize="medium" />
                            <span>Favorite</span>
                        </NavLink>
                    </div>
                : <></>}
            </div>
            <div className="Header_Log">
                <Avatar className="AvatarLogo" onClick={toastMess}>I</Avatar>

            </div>
        </div>
    );
}

export default Header;
