import { toast } from "react-toastify";
import { instance } from "../api/instance";
import { pause } from "../utils/pause";
import { createAsyncThunk } from "@reduxjs/toolkit";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
export const fetchProduct = createAsyncThunk("products/fetch", async () => {
  await pause(2000);
  const { data } = await instance.get(
    "products?_sort=price&_page=1&_order=desc&_limit=5"
  );
  return data;
});
export const Fetch6ProductNew = createAsyncThunk(
  "sixproducts/fetch",
  async () => {
    await pause(2000);
    const { data } = await instance.get("sixproducts?_limit=8&_page=1");
    return data;
  }
);
export const fetchProduct1 = createAsyncThunk("products/fetch", async () => {
  await pause(2000);
  const { data } = await instance.get("products?_sort=price");
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
export const UpdateProductAction = createAsyncThunk(
  "products/update",
  async (product: any) => {
    try {
      console.log(product);
      const { data } = await instance.put(
        `/products/${product.id}/update`,
        product
      );
      return data;
    } catch (error) {
      console.error("Lỗi khi cập nhật sản phẩm:", error);
      throw error;
    }
  }
);

export const DeleteProduct = createAsyncThunk(
  "products/delete",
  async (data: any) => {
    console.log(data);
    const confirm = window.confirm(
      "Bạn có chắc muốn xóa và thêm vào thùng rác không?"
    );
    if (confirm) {
      try {
        await instance.delete(`/products/${data.idproduct}`, {
          headers: {
            Authorization: `Bearer ${data.token}`,
          },
        });
        toast.success("Thêm vào thùng rác thành công!");
        return data.idproduct;
      } catch (error) {
        toast.error("Xảy ra lỗi khi xóa.");
      }
    }
    // await instance.delete(`/products/${productId}`);
    // return productId;
  }
);
export const GetOneProduct = createAsyncThunk("products", async (id: any) => {
  const { data } = await instance.get(`products/${id}`);
  console.log(data);
  return data;
});
