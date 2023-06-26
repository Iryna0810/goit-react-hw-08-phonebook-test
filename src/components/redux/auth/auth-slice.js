import { createSlice } from "@reduxjs/toolkit";
import { getProfile, login, register } from "./auth-thunk";


const initialState = {
    user: { name: null, email: null, password: null },
    token: null,
    isLoggedIn: false,
    error: '',
}

const handlePending = (state) => {
    state.isLoggedIn = false
    state.error= ''
}

const handleRejected = (state, {error, payload}) => {
    state.isLoggedIn = false
    state.error = error ? error.message : payload
}

const handleFulfiled = (state, { payload }) => {
    // state.user.name = payload.user.name
    // state.user.email = payload.user.email
    state.isLoggedIn = true
    state.token = payload.token
    console.log(payload)
    console.log(state.user.name)
    console.log(state.token)
}

const handleFulfiledProfile = (state, { payload }) => {
    // state.isLoggedIn = true
    state.user.name = payload.user.name
    state.user.email = payload.user.email
}

const authSlice = createSlice({
    name: 'auth',
    initialState,
    extraReducers: (builder) => {
        builder
            .addCase(login.fulfilled, handleFulfiled)
            // .addCase(getProfile.fulfilled, handleFulfiledProfile)
            .addMatcher(({ type }) => type.endsWith('/pending'), handlePending)
            .addMatcher(({ type }) => type.endsWith('/rejected'), handleRejected)
        
        
    }
    // extraReducers: {
    //     [register.fulfilled](state, {payload}) {
    //         state.user.name = payload.user.name;
    //         state.user.email = payload.user.email;
    //         // state.user.password = payload.password;
    //         state.token = payload.token;
    //         console.log(state.user);
    //         console.log(state.token);
    //     },
    //     [login.fulfilled](state, {payload}) {
    //         state.user = payload.user;
    //         state.token = payload.token;
    //         state.isLoggedIn = true;
    //         console.log(state.user);
    //                     console.log(state.token);
    //     },
        // setAuth(state, {payload}) {
        //     state.value = payload;
        }
    
)

export const authReducer = authSlice.reducer