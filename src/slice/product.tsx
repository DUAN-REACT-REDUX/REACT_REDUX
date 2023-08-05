import { createSlice } from "@reduxjs/toolkit";
import {
  AddProductAction,
  DeleteProduct,
  Get9Product,
  GetAllPro,
  fetch9Product,
  fetchProduct,
  fetchProduct1,
  Fetch6ProductNew
} from "../actions/product";
import { GetproductByCategory } from "../actions/category";

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
    builder.addCase(DeleteProduct.fulfilled, (state: any, action) => {
      state.products.data = state.products?.data.filter(
        (product: any) => product.product_id !== action.payload
      );
    });
    builder.addCase(fetch9Product.fulfilled, (state: any, action) => {
      // console.log(state.products.data);
      console.log(action.payload);

      state.products = action.payload;
    });
    builder.addCase(Get9Product.fulfilled, (state: any, action) => {
      console.log(state.products.data);
      console.log(action.payload);

      state.products = action.payload.data;
      state.currentPage = action.payload.total;
    });
    builder.addCase(GetproductByCategory.fulfilled, (state: any, action) => {
      console.log(state.products);
      console.log(action.payload);
      state.products = action.payload
    });
    //new 6 product
    builder.addCase(Fetch6ProductNew.fulfilled, (state, action) => {
      state.products = action.payload;
      console.log(action)
    });
    builder.addCase(Fetch6ProductNew.rejected, (state, action) => {
      console.log(action.error.message);
    });
  },
});

export default ProductReducer.reducer;
