import { configureStore } from "@reduxjs/toolkit";
import FavoriteSlice from "./FavoriteSlice";
import UsersSlice from "./UsersSlice";


export const store = configureStore({
    reducer:{
        favorite: FavoriteSlice,
        users: UsersSlice
    }
})