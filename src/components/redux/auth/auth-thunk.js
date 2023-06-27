import { loginFetch, registerFetch, getProfileFetch, logoutFetch } from "services/auth";
import { createAsyncThunk } from "@reduxjs/toolkit";


export const register = createAsyncThunk('auth/register', async (body,{rejectWithValue}) => {
    try {
        registerFetch(body);
    } catch (error) {
        return rejectWithValue(error.message);
    }
})

export const getProfile = createAsyncThunk('auth/profile', (token) => {
        getProfileFetch(token)
})

export const login = createAsyncThunk('auth/login', async (body, {dispatch, rejectWithValue}) => {
    try {
        const data = await loginFetch(body)
        // dispatch(getProfile())
        return data;
    } catch (error) {
        return rejectWithValue(error.response.data.message);
    }
})

export const logout = createAsyncThunk('auth/logout', async (token, { rejectWithValue }) => {
    try {
        const data = await logoutFetch(token)
        // dispatch(getProfile())
        return data;
    } catch (error) {
        return rejectWithValue(error.response.data.message);
    }
})



