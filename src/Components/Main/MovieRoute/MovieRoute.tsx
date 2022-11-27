import { useEffect, useState } from "react";
import { GenreInterface } from "../../../model/genreInterface";
import { apiService } from "../../../Service/ApiService";
import Genre from "../Genre/Genre";
import "./MovieRoute.css";
// import { GenreInterface } from "../../../../model/genreInterface";
// import { apiService } from "../../../../Service/ApiService";
// import Genre from "./Genre/Genre";

function MovieRoute(): JSX.Element {
     const [genre, setGenre] = useState<GenreInterface[]>()

     useEffect(() => {
        apiService.getMovieGenres().then(res => setGenre(res));
    }, [])

    function getMoviewsGenre(genId:any){
        alert(genId)
    }
    return (
        <div className="MovieRoute">
			 <div className="GenreDiv">
                {genre?.map((gen)=> <Genre onclick={()=> getMoviewsGenre(gen.id)} key={gen.id} id={gen.id} name={gen.name}/>)}
            </div>
        </div>
    );
}

export default MovieRoute;
