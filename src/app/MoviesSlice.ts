import { createSlice } from '@reduxjs/toolkit'

const MoviesSlice = createSlice({
  name: 'movies',
  initialState:[],
  reducers: {
    fetchMovies:(state,actions)=>{
        return state = actions.payload
    }
  }
});

export const { fetchMovies } = MoviesSlice.actions

export default MoviesSlice.reducer