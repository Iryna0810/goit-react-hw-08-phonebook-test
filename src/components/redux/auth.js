import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
    name: 'auth',
    initialState: {value: ''},
    reducers: {
        // setAuth(state, {payload}) {
        //     state.value = payload;
        }
    }
)

export const authReducer = authSlice.reducer