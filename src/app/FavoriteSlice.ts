import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    values: []
}

const FavoriteSlice = createSlice({
    name: 'favorite',
    initialState,
    reducers: {
        add: (state, actions) => {
            state.values = state.values.concat(actions.payload)
            // console.log(state.values)
        },
        remove: (state, actions) => {
            state.values = state.values.filter((value:any) => value.id !== actions.payload.id);
            // console.log(state.values)
        }
    }
});

export const { add, remove } = FavoriteSlice.actions

export default FavoriteSlice.reducer