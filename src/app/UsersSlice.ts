import { createSlice } from '@reduxjs/toolkit'

const UsersSlice = createSlice({
    name: "login",
    initialState: {
        username: "",
        password: ""
    },
    reducers: {
        onLogin: (state, action) => {
            const { username , password } = action.payload;
          }
    },
});

export const { onLogin } = UsersSlice.actions

export default UsersSlice.reducer