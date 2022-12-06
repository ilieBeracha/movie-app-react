import { config } from "../../../../../../config/config";
import { ReviewsInterface } from "../../../../../../model/ReviewsInterface";
import "./Review.css";

function Review({ review }:{ review:ReviewsInterface }): JSX.Element {
    return (
        <div className="Review">
			<a href={review.url}>Review</a>
            {/* <img src={config.images_url +review.author_details.avatar_path} alt={review.author} /> */}
            <p>{review.author_details.username}</p>
            <p>Rating: {review.author_details.rating}</p>
            {/* <p id="reviewP">Content: {review.content}</p> */}
        </div>
    );
}

export default Review;
