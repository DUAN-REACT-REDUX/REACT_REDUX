import { produce } from "immer"
import { createSlice } from "@reduxjs/toolkit";

import { AddCategory, DeleteCategory, fetchCat, getAllCategory } from "../actions/category"

const initialState = {
    categories: [],
    isloadingCat: false,
    errorCat: "",
    currentPage: 1,
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

        builder
            .addCase(getAllCategory.pending, (state) => {
                state.isloadingCat = true;
            })
            .addCase(getAllCategory.fulfilled, (state, action) => {
                console.log(action);
                state.isloadingCat = false;
                state.currentPage = action.payload.total;
                state.categories = action.payload.data;
            });
        builder.addCase(AddCategory.fulfilled, (state: any, action) => {
            state.categories.push(action.payload);
        });
        builder.addCase(DeleteCategory.fulfilled, (state: any, action) => {
            state.categories.data = state.categories?.data.filter(
                (categories: any) => categories.cat_id !== action.payload
            );
        });
    },
});

export default CategoryReducer.reducer;