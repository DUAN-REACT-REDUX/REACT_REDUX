import { createSlice } from "@reduxjs/toolkit"
import { GetAllPro, fetchProduct } from "../actions/product"

const initialState = {
    products: [],
    currentPage: 1,
    isloading: false,
    error: ""
}
const ProductReducer = createSlice({
    name: "products",
    initialState,
    reducers: {},
    // extraReducers(buider) {
    //     buider
    //         .addCase(fetchProduct.pending, (state) => {
    //             state.isloading = true
    //         })
    //         .addCase(fetchProduct.fulfilled, (state, action) => {
    //             console.log(action);

    //             state.isloading = false
    //             state.products = action.payload
    //         })
    //         .addCase(GetAllPro.pending, (state) => {
    //             state.isloading = true
    //         })
    //         .addCase(GetAllPro.fulfilled, (state, action) => {
    //             console.log(action);

    //         })

    // }
    extraReducers(builder) {
        builder
            .addCase(fetchProduct.pending, (state) => {
                state.isloading = true
            })
            .addCase(fetchProduct.fulfilled, (state, action) => {
                console.log(action);
                state.isloading = false
                state.products = action.payload
            })
        builder
            .addCase(GetAllPro.pending, (state) => {
                state.isloading = true
            })
            .addCase(GetAllPro.fulfilled, (state, action) => {
                console.log(action);
                state.isloading = false
                state.currentPage = action.payload.total
                state.products = action.payload.data
            })

    },
})


export default ProductReducer.reducer