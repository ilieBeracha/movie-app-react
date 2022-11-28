import { NavLink } from "react-router-dom";
import { scrollTo } from "../../functions/scrollTo";
import "./Header.css";

function Header(): JSX.Element {

    return (
        <div className="Header">
            <NavLink to={'/'}>
                <div onClick={() => scrollTo.scrollTo()} className="Header_Headings">
                    <h1>Need's</h1>
                </div>
            </NavLink>

            <div className="Header_NavBar">
                <NavLink to={'/'}>Home</NavLink>
                <NavLink to={'/movies'}>Movies</NavLink>
                <NavLink to={'/tv'}>Tv Shows</NavLink>
            </div>

            <div className="Header_Log">
                <img src='' alt="" />
            </div>
        </div>
    );
}

export default Header;
