import { Skeleton } from "@mui/material";
import "./SkeletonLoader.css";

function SkeletonLoader(): JSX.Element {
    return (
        <div className="SkeletonLoader">
			<Skeleton animation="wave" width={140} height={400}/>
        </div>
    );
}

export default SkeletonLoader;
