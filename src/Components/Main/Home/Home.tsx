import AllMovies from "./AllMovies/AllMovies";
import "./Home.css";
import WelcomeMovie from "./WelcomeMovie/WelcomeMovie";

function Home(): JSX.Element {
    return (
        <div className="Home">
			<WelcomeMovie />
            <AllMovies />
        </div>
    );
}

export default Home;
