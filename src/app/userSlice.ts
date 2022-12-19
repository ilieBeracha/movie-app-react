import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    user: ''
}

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        saveUsername: (state, actions) => {
            return state = actions.payload
        }
    }
});

export const { saveUsername } = userSlice.actions

export default userSlice.reducer