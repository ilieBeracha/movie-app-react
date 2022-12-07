import { configureStore } from "@reduxjs/toolkit";
import FavoriteSlice from "./FavoriteSlice";
import lightDarkSlice from "./lightDarkSlice";
import MoviesSlice from "./MoviesSlice";
import TvShowsSlice from "./TvShowsSlice";
import UsersSlice from "./UsersSlice";


export const store = configureStore({
    reducer: {
        favorite: FavoriteSlice,
        users: UsersSlice,
        movies: MoviesSlice,
        tv: TvShowsSlice,
        mode: lightDarkSlice
    }
})