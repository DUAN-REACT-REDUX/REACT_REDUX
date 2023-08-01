import { createAsyncThunk } from "@reduxjs/toolkit";
import { pause } from "../utils/pause";
import { instance } from "../api/instance";

export const logIn = createAsyncThunk('auth/login', async (userLogin:any) => {
    await pause(2000)
    const { data } = await instance.post('signin', userLogin)
    return data
});
export const Signup = createAsyncThunk('auth/signup', async (user:any) => {
    await pause(2000)
    const { data } = await instance.post('signup', user)
    console.log(data)
    return data
});

