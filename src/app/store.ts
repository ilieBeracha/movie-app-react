import { configureStore } from "@reduxjs/toolkit";
import FavoriteSlice from "./FavoriteSlice";

export const store = configureStore({
    reducer:{
        favorite: FavoriteSlice
    }
})