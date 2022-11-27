import AllMovies from "./AllMovies/AllMovies";
import "./Home.css";
import WelcomeDiv from "./WelcomeMovie/WelcomeDiv";

function Home(): JSX.Element {
    return (
        <div className="Home">
			<WelcomeDiv />
            <AllMovies />
        </div>
    );
}

export default Home;
