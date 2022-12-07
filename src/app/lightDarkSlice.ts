import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    toggle:false
}

const lightDarkSlice = createSlice({
  name: 'mode',
  initialState,
  reducers: {
    darkMode:(state)=>{
        state.toggle = true
    },
    lightMode:(state)=>{
        state.toggle = false
    }
  }
});

export const { darkMode, lightMode } = lightDarkSlice.actions

export default lightDarkSlice.reducer