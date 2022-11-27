export interface ReviewsInterface{
    author:string,
    author_details:{
        name:string,
        username:string,
        avatar_path:string,
        rating: number
    }
    content:string,
    created_at:string,
    is:string,
    updated_at:string,
    url:string
}

export interface MainReviews{
    results:ReviewsInterface[]
}