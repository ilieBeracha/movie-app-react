import { configureStore } from "@reduxjs/toolkit";
import FavoriteSlice from "./FavoriteSlice";
import lightDarkSlice from "./lightDarkSlice";
import loggedSlice from "./logged";
import MoviesSlice from "./MoviesSlice";
import TvShowsSlice from "./TvShowsSlice";
import userSlice from "./userSlice";


export const store = configureStore({
    reducer: {
        favorite: FavoriteSlice,
        movies: MoviesSlice,
        tv: TvShowsSlice,
        mode: lightDarkSlice,
        logged: loggedSlice,
        user: userSlice
    }
})