import { useEffect, useState } from "react";
import { GenreInterface } from "../../../model/genreInterface";
import { apiService } from "../../../Service/ApiService";
import Genre from "../Genre/Genre";
import "./TvRoute.css";
// import { GenreInterface } from "../../../../model/genreInterface";
// import { apiService } from "../../../../Service/ApiService";
// import Genre from "./Genre/Genre";

function TvRoute(): JSX.Element {
     const [genre, setGenre] = useState<GenreInterface[]>()

     useEffect(() => {
        apiService.getTvGenres().then(res => setGenre(res))
    }, [])
    return (
        <div className="TvRoute">
			 <div className="GenreDiv">
                {genre?.map((gen)=> <Genre onclick={()=> alert(gen.id)} key={gen.id} id={gen.id} name={gen.name}/>)}
            </div>
        </div>
    );
}

export default TvRoute;
