import { produce } from "immer"

const initialState = {
    categories: [],
    isloadingCat: false,
    errorCat: ""
}
const gf = (state = initialState, action: any) => {
    return produce(state, (drafState: any) => {
        switch (action.type) {
            //FETCH
            case "cat/fetch":
                drafState.categories = action.payload
                return
            case "cat/fetching":
                drafState.isloading = true
                return
            case "cat/fetchsuccess":
                drafState.isloading = false
                return
            case "cat/fetcherror":
                drafState.error = action.payload
                return

            //GETONE
            case "cat/getone":
                drafState.categories = action.payload
                return
           


            default:
                return state

        }
    })
}

import { createSlice } from "@reduxjs/toolkit";
import { AddProductAction, GetAllPro, fetchProduct } from "../actions/product";
import { AddCat, AddCategory } from "../actions/category"

const CategoryReducer = createSlice({
    name: "categories",
    initialState,
    reducers: {},

    extraReducers(builder) {
        builder
            .addCase(fetchProduct.pending, (state) => {
                state.isloadingCat = true;
            })
            .addCase(fetchProduct.fulfilled, (state, action) => {
                console.log(action);
                state.isloadingCat = false;
                state.categories = action.payload;
            });
        builder
            .addCase(GetAllPro.pending, (state) => {
                state.isloadingCat = true;
            })
            .addCase(GetAllPro.fulfilled, (state, action) => {
                console.log(action);
                state.isloadingCat = false;
                state.categories = action.payload.data;
            });
        builder.addCase(AddCategory.fulfilled, (state: any, action) => {
            state.categories.push(action.payload);
        });
    },
});

export default CategoryReducer.reducer;
