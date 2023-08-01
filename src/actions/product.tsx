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
export const fetch9Product = createAsyncThunk("products/fetch9", async () => {
  await pause(2000);
  const { data } = await instance.get(
    "products?_sort=price&_page=1&_order=desc&_limit=9"
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
export const Get9Product = createAsyncThunk(
  "products/get9",
  async (total: any) => {
    console.log(total);

    // await pause(500)
    const { data } = await instance.get(
      `products?_sort=price&_page=${total}&_order=desc&_limit=9`
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
  async (data: any) => {
    console.log(data);

    try {
      await instance.delete(`/products/${data.idproduct}`, {
        headers: {
          Authorization: `Bearer ${data.token}`,
        },
      });
      return data.idproduct;
    } catch (error) {
      console.log(error);
    }
    // await instance.delete(`/products/${productId}`);
    // return productId;
  }
);
