import { produce } from "immer"
import { createSlice } from "@reduxjs/toolkit";

import { AddCategory, fetchCat, getAllCategory } from "../actions/category"

const initialState = {
    categories: [],
    isloadingCat: false,
    errorCat: "",
    currentPage: 1,
    totalPages: 0,
};

const CategoryReducer = createSlice({
    name: "categories",
    initialState,
    reducers: {},

    extraReducers(builder) {
        builder
            .addCase(fetchCat.pending, (state) => {
                state.isloadingCat = true;
            })
            .addCase(fetchCat.fulfilled, (state, action) => {
                console.log(action);
                state.isloadingCat = false
                state.categories = action.payload
            })


        // builder
        //     .addCase(getAllCategory.pending, (state) => {
        //         state.isloadingCat = true;
        //     })
        // builder.addCase(getAllCategory.fulfilled, (state, action) => {
        //     state.isloadingCat = false;
        //     state.categories = action.payload.data;
        //     state.currentPage = action.payload.currentPage;
        //     state.totalPages = action.payload.totalPages;
        // });

        builder.addCase(AddCategory.fulfilled, (state: any, action) => {
            state.categories.push(action.payload);
        });
    },
});

export default CategoryReducer.reducer;