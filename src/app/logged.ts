import { createSlice } from '@reduxjs/toolkit'
import { Action } from '@remix-run/router';

const loggedSlice = createSlice({
    name: 'logged',
    initialState: false,
    reducers: {
        checkLogged: (state,actions) => {
            return state = actions.payload
        }
    }
});

export const { checkLogged } = loggedSlice.actions

export default loggedSlice.reducer