import { createSlice } from "@reduxjs/toolkit";
import { fetchRecycle, getProductsFromRecyclebin } from "../actions/recyclebin";

const initialState = {
    recyclebin: [],
    isloading: false,
    error: "",
    currentPage: 1,
};

const RecyclebinReducer = createSlice({
    name: "recyclebin",
    initialState,
    reducers: {},

    extraReducers(builder) {
        builder
            .addCase(fetchRecycle.pending, (state) => {
                state.isloading = true;
            })
            .addCase(fetchRecycle.fulfilled, (state, action) => {
                console.log(action);
                state.isloading = false
                state.recyclebin = action.payload
            })

        builder
            .addCase(getProductsFromRecyclebin.pending, (state) => {
                state.isloading = true;
            })
            .addCase(getProductsFromRecyclebin.fulfilled, (state, action) => {
                console.log(action);
                state.isloading = false;
                state.currentPage = action.payload.total;
                state.recyclebin = action.payload.data;
            });
    }
})

export default RecyclebinReducer.reducer;