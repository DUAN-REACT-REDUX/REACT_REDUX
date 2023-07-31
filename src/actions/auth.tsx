import { createAsyncThunk } from "@reduxjs/toolkit";
import { pause } from "../utils/pause";
import { instance } from "../api/instance";

export const logIn = createAsyncThunk('auth/login', async (userLogin) => {
    await pause(2000)
    const { data } = await instance.post('signin', userLogin)
    //Save access token
    // localStorage.setItem('token',data.token);
    localStorage.setItem('token', "du_an_fw2");
    return data
});
export const Signup = createAsyncThunk('auth/signup', async (user) => {
    console.log(user)

    await pause(2000)
    const { data } = await instance.post('signup', user)
    console.log(data)

    //Save access token
    // localStorage.setItem('token',data.token);

    return data
});

