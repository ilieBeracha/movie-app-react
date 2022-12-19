import { createSlice } from '@reduxjs/toolkit'

const TvShowsSlice = createSlice({
  name: 'tv',
  initialState:[],
  reducers: {
    fetchTv:(state,actions)=>{
        return state = actions.payload
    }
  }
});

export const { fetchTv } = TvShowsSlice.actions

export default TvShowsSlice.reducer