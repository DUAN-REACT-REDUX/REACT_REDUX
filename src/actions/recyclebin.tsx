import { instance } from "../api/instance";
import { pause } from "../utils/pause";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchRecycle = createAsyncThunk("recyclebin/fetch", async () => {
    try {
        const response = await instance.get(`/recyclebin`); // Change the API endpoint as needed
        return response.data;
    } catch (error) {
        console.log(error);
        throw error; // Rethrow the error to be caught by the caller
    }
});


export const getProductsFromRecyclebin = createAsyncThunk(
    "recyclebin",
    async (data: any) => {
        await instance.get(`/recyclebin`); // Corrected the API endpoint to include the page number
        return data.idrecycle;
    }
);
export const RestoreProduct = createAsyncThunk(
    "Restore",
    async (id: any) => {
        console.log(id);
        
        const data = await instance.get(`/recyclebin/${id}`); // Corrected the API endpoint to include the page number
        console.log(data);
        
        return 
    }
);