import { GenreInterface } from "../../../model/genreInterface";
import "./Genre.css";

function Genre({ name, onclick }:GenreInterface): JSX.Element {
    return (
        <div id={name} className="Genre">
			<p onClick={onclick} >{name}</p>
        </div>
    );
}

export default Genre;
