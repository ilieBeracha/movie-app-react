import Header from "../../Header/Header";
import AllMovies from "./AllMovies/AllMovies";
import "./Home.css";
import WelcomeDiv from "./WelcomeDiv/WelcomeDiv";

function Home(): JSX.Element {
    return (
        <div className="Home">
			<WelcomeDiv />
            <AllMovies />
        </div>
    );
}

export default Home;
