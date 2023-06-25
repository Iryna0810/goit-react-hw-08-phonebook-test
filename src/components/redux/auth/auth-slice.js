import { createSlice } from "@reduxjs/toolkit";
import { login, register } from "./auth-operation";


const initialState = {
    user: { name: null, email: null },
    token: null,
    isLoggedIn: false,
}

const authSlice = createSlice({
    name: 'auth',
    initialState,
    extraReducers: {
        [register.fulfilled](state, {payload}) {
            state.user = payload.user;
            state.token = payload.token;
        },
        [login.fulfilled](state, {payload}) {
            state.user = payload.user;
            state.token = payload.token;
        },
        // setAuth(state, {payload}) {
        //     state.value = payload;
        }
    }
)

export const authReducer = authSlice.reducer