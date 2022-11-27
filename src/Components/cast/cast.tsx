import { config } from "../../config/config";
import { CastInterface } from "../../model/castInterface";
import "./cast.css";

function Cast({cast}:{cast:CastInterface}): JSX.Element {
    return (
        <div className="cast">
			<img src={config.images_url_small + cast.profile_path} alt={cast.name} />
            <h5>{cast.original_name}</h5>
            <p>{cast.character}</p>
        </div>
    );
}

export default Cast;
