import { useEffect, useState } from "react";
// import { GenreInterface } from "../../../../model/genreInterface";
// import { apiService } from "../../../../Service/ApiService";
import "./AllMovies.css";
// import Genre from "./Genre/Genre";
import MoviesContent from "./MoviesContent/MoviesContent";

function AllMovies(): JSX.Element {
    // const [genre, setGenre] = useState<GenreInterface[]>()

    useEffect(() => {
        // apiService.getGenres().then(res => setGenre(res))
    }, [])
    return (
        <div className="AllMovies">
            {/* <div className="GenreDiv">
                {genre?.map((gen)=> <Genre onclick={()=> alert(gen.id)} key={gen.id} id={gen.id} name={gen.name}/>)}
            </div> */}
            {/* <div className="AllMoviesWhatsPopular">
                
            </div> */}
            <MoviesContent />
        </div>
    );
}

export default AllMovies;
