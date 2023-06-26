import { loginFetch, registerFetch, getProfileFetch } from "services/auth";
import { createAsyncThunk } from "@reduxjs/toolkit";


export const register = createAsyncThunk('auth/register', async (body,{rejectWithValue}) => {
    try {
        registerFetch(body);
    } catch (error) {
        return rejectWithValue(error.message);
    }
})

export const getProfile = createAsyncThunk('auth/login', () => {
        getProfileFetch()
})

export const login = createAsyncThunk('auth/login', async (body, {dispatch, rejectWithValue}) => {
    try {
        const data = await loginFetch(body)
        dispatch(getProfile())
        return data;
    } catch (error) {
        return rejectWithValue(error.message);
    }
})



