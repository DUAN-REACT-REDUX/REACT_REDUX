import { instance } from "../api/instance";
import { pause } from "../utils/pause";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchProduct = createAsyncThunk("products/fetch", async () => {
  await pause(2000);
  const { data } = await instance.get(
    "products?_sort=price&_page=1&_order=desc&_limit=5"
  );
  return data;
});

export const GetAllPro = createAsyncThunk(
  "products/get",
  async (total: any) => {
    // await pause(500)
    const { data } = await instance.get(
      `products?_sort=price&_page=${total}&_order=desc&_limit=5`
    );
    return { total, data };
  }
);

export const AddProductAction = createAsyncThunk(
  "products/add",
  async (product: any) => {
    console.log(product);
    const { data } = await instance.post("/products/add", product);
    return data;
  }
);
export const DeleteProduct = createAsyncThunk(
  "products/delete",
  async (productId: any) => {
    const accesstoken = JSON.parse(localStorage.getItem("accesstoken")!);
    console.log(accesstoken);
    console.log(productId);

    try {
      await instance.delete(`/products/${productId}`, {
        headers: {
          Authorization: `Bearer ${accesstoken}`,
        },
      });
      return productId;
    } catch (error) {
      console.log(error);
    }
    // await instance.delete(`/products/${productId}`);
    // return productId;
  }
);
