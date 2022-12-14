export interface UpcomingMoviesInterface{
    adult:boolean,
    backdrop_path:string,
    genre_ids:number[],
    id:number,
    original_title:string,
    overview:string,
    popularity:number,
    poster_path:string,
    release_date:string,
    title:string
}

export interface MainUpcomingInterface{
    results:UpcomingMoviesInterface[]
}