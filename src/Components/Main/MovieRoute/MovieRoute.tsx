import { useEffect } from "react";
import "./MovieRoute.css";
// import { GenreInterface } from "../../../../model/genreInterface";
// import { apiService } from "../../../../Service/ApiService";
// import Genre from "./Genre/Genre";

function MovieRoute(): JSX.Element {
     // const [genre, setGenre] = useState<GenreInterface[]>()

     useEffect(() => {
        // apiService.getGenres().then(res => setGenre(res))
    }, [])
    return (
        <div className="MovieRoute">
			 {/* <div className="GenreDiv">
                {genre?.map((gen)=> <Genre onclick={()=> alert(gen.id)} key={gen.id} id={gen.id} name={gen.name}/>)}
            </div> */}
        </div>
    );
}

export default MovieRoute;
