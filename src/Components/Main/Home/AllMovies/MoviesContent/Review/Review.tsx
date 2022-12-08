import { config } from "../../../../../../config/config";
import { ReviewsInterface } from "../../../../../../model/ReviewsInterface";
import "./Review.css";

function Review({ review }: { review: ReviewsInterface }): JSX.Element {
    return (
        <div className="Review">
            <div className="reviewImg">
                {review.author_details.avatar_path?
                    <img src={config.images_url + review.author_details.avatar_path} alt={review.author} />
                :<div className="noImgReviewDiv">No Image</div>}
            </div>
            <div className="reviewDesp">
                <p>{review.author_details.username}</p>
                <p>Rating: {review.author_details.rating}</p>
                <a href={review.url}>Review</a>
            </div>
            {/* <p id="reviewP">Content: {review.content}</p> */}
        </div>
    );
}

export default Review;
