import { createSlice } from '@reduxjs/toolkit'
import { UserInterface } from '../model/UserInterface';
import { users } from '../Service/UserDetails';

const UsersSlice = createSlice({
    name: "users",
    initialState: [] ,
    reducers:{
        
    }
    
});

export const {  } = UsersSlice.actions

export default UsersSlice.reducer