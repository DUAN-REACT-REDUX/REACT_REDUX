import { createSlice } from "@reduxjs/toolkit";
import { AddProductAction, GetAllPro, fetchProduct } from "../actions/product";

const initialState = {
  products: [],
  currentPage: 1,
  isloading: false,
  error: "",
};
const ProductReducer = createSlice({
  name: "products",
  initialState,
  reducers: {},

  extraReducers(builder) {
    builder
      .addCase(fetchProduct.pending, (state) => {
        state.isloading = true;
      })
      .addCase(fetchProduct.fulfilled, (state, action) => {
        console.log(action);
        state.isloading = false;
        state.products = action.payload;
      });
    builder
      .addCase(GetAllPro.pending, (state) => {
        state.isloading = true;
      })
      .addCase(GetAllPro.fulfilled, (state, action) => {
        console.log(action);
        state.isloading = false;
        state.currentPage = action.payload.total;
        state.products = action.payload.data;
      });
    builder.addCase(AddProductAction.fulfilled, (state: any, action) => {
      state.products.push(action.payload);
    });
  },
});

export default ProductReducer.reducer;
