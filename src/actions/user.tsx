import { createAsyncThunk } from "@reduxjs/toolkit";
import { pause } from "../utils/pause";
import { instance } from "../api/instance";
export const fetchUser = createAsyncThunk('users/fetch', async () => {
    await pause(2000)
    const { data } = await instance.get('users')
    return data
})