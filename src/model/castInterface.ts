export interface CastInterface{
    adult:boolean,
    gender:number,
    id:number,
    known_for_department:string,
    name:string,
    original_name:string,
    profile_path:string,
    character:string
}

export interface MainCast{
    cast:CastInterface[]
}